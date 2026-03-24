# ============================================================
# Script 2: inject_into_layer.py
# Purpose: Read all output files from the output/ folder and
#          inject them into the correct layer .js file,
#          replacing the existing entries for that category.
#
# All category comments follow the format: //CategoryName
# (no space between // and the name)
#
# Folder structure:
#   unmined_tools/
#   ├── csv/                  ← CSV source files
#   ├── output/               ← Generated JS blocks (input for this script)
#   ├── playerimages/         ← Your marker images
#   ├── custom_temples.js     ← Layer files in root
#   ├── custom_shipwrecks.js
#   ├── custom_underground.js
#   ├── custom_villages.js
#   ├── custom_pillager.js
#   ├── custom_portals.js
#   ├── custom_spawnpoint.js
#   ├── csv_to_js.py
#   └── inject_into_layer.py  ← This script
# ============================================================

import os
import re
import shutil

# ============================================================
# CONFIGURATION TABLE
#
# This table links every output filename to:
#   - "layer"   : the .js layer file to update
#   - "comment" : the exact category comment in that layer file
#
# All comments use the format //CategoryName (no space after //)
#
# To add a new category later:
#   1. Add a new line in this table
#   2. Make sure the comment matches exactly in the layer file
# ============================================================

CATEGORY_MAP = {

    # custom_temples.js
    "desert_pyramid_output.js":         {"layer": "custom_temples.js",      "comment": "//Desert Pyramid"},
    "desert_well_output.js":            {"layer": "custom_temples.js",      "comment": "//Desert Well"},
    "jungle_pyramid_output.js":         {"layer": "custom_temples.js",      "comment": "//Jungle Pyramid"},
    "ocean_ruins_output.js":            {"layer": "custom_temples.js",      "comment": "//Ocean Ruin"},
    "ocean_monument_output.js":         {"layer": "custom_temples.js",      "comment": "//Ocean Monument"},

    # custom_shipwrecks.js
    "shipwrecks_output.js":             {"layer": "custom_shipwrecks.js",   "comment": "//Shipwrecks"},
    "treasure_output.js":               {"layer": "custom_shipwrecks.js",   "comment": "//Treasure"},

    # custom_underground.js
    "ancient_city_output.js":           {"layer": "custom_underground.js",  "comment": "//Ancient City's"},
    "mineshafts_output.js":             {"layer": "custom_underground.js",  "comment": "//Mineshafts"},
    "strongholds_output.js":            {"layer": "custom_underground.js",  "comment": "//Strongholds"},
    "trail_ruins_output.js":            {"layer": "custom_underground.js",  "comment": "//Trail Ruins"},
    "trail_chambers_output.js":         {"layer": "custom_underground.js",  "comment": "//Trail Chambers"},

    # custom_villages.js
    "igloo_output.js":                  {"layer": "custom_villages.js",     "comment": "//Igloo"},
    "igloo_with_basement_output.js":    {"layer": "custom_villages.js",     "comment": "//Igloo (with basement)"},
    "village_output.js":                {"layer": "custom_villages.js",     "comment": "//Village"},
    "zombie_village_output.js":         {"layer": "custom_villages.js",     "comment": "//Zombie Village"},

    # custom_pillager.js
    "pillager_outpost_output.js":       {"layer": "custom_pillager.js",     "comment": "//Pillager Outpost"},
    "swamp_hut_output.js":              {"layer": "custom_pillager.js",     "comment": "//Swamp Hut"},
    "woodland_mansion_output.js":       {"layer": "custom_pillager.js",     "comment": "//Woodland Mansion"},

    # custom_portals.js
    "portal_nether_output.js":          {"layer": "custom_portals.js",      "comment": "//portal nether"},
    "ruined_portal_output.js":          {"layer": "custom_portals.js",      "comment": "//Ruined Portal"},
    "portal_end_output.js":             {"layer": "custom_portals.js",      "comment": "//portal end"},

    # custom_spawnpoint.js
    "spawnpoint_output.js":             {"layer": "custom_spawnpoint.js",   "comment": "//Spawnpoint"},
}

# ============================================================
# PATHS - These are automatic, no need to change these
# ============================================================

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
OUTPUT_DIR = os.path.join(SCRIPT_DIR, "output")

# ============================================================
# HELPER FUNCTION: inject one output file into a layer file
# ============================================================

def inject(output_filename, layer_filename, category_comment):
    """
    Replaces the entries of a category in a layer file
    with the contents of an output file.
    """

    output_path = os.path.join(OUTPUT_DIR, output_filename)
    layer_path  = os.path.join(SCRIPT_DIR, layer_filename)
    backup_path = layer_path + ".backup"

    # Check if the output file exists
    if not os.path.exists(output_path):
        print(f"  SKIP : 'output/{output_filename}' not found, skipping.")
        return False

    # Check if the layer file exists
    if not os.path.exists(layer_path):
        print(f"  ERROR: '{layer_filename}' not found in root folder!")
        return False

    # Read the new entries
    with open(output_path, 'r', encoding='utf-8') as f:
        new_entries = f.read()

    # Read the current layer file
    with open(layer_path, 'r', encoding='utf-8') as f:
        layer_content = f.read()

    # Check if the category comment exists in the layer file
    if category_comment not in layer_content:
        print(f"  ERROR: '{category_comment}' not found in '{layer_filename}'!")
        print(f"         Check that the comment in the layer file matches exactly.")
        return False

    # Build the regex pattern to find the block of entries for this category
    # It matches:
    #   - The category comment line (e.g. "//Ocean Monument")
    #   - Everything after it (the existing entries)
    #   - Until the next category comment (//) or the closing bracket "]"
    pattern = (
        r'(' + re.escape(category_comment) + r'\s*\n)'  # The category comment line
        r'([\s\S]*?)'                                     # The existing entries
        r'(?=\s*//|\s*\])'                               # Until next // comment or end
    )

    match = re.search(pattern, layer_content)
    if not match:
        print(f"  ERROR: Could not find the entries block for '{category_comment}'!")
        print(f"         The structure of '{layer_filename}' may be unexpected.")
        return False

    # Replace the existing entries with the new ones
    new_block   = match.group(1) + new_entries + "\n"
    new_content = layer_content[:match.start()] + new_block + layer_content[match.end():]

    # Make a backup before writing
    shutil.copy2(layer_path, backup_path)

    # Write the updated content back
    with open(layer_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

    return True

# ============================================================
# MAIN - Loop through all output files in the output/ folder
# ============================================================

print("=" * 60)
print("inject_into_layer.py - Unmined layer updater")
print("=" * 60)

# Check if the output folder exists
if not os.path.exists(OUTPUT_DIR):
    print(f"ERROR: The output/ folder does not exist.")
    print(f"Run csv_to_js.py first to generate output files.")
    exit()

# Get all _output.js files in the output folder
output_files = [f for f in os.listdir(OUTPUT_DIR) if f.endswith("_output.js")]

if not output_files:
    print("No output files found in the output/ folder.")
    print("Run csv_to_js.py first to generate output files.")
    exit()

print(f"Found {len(output_files)} output file(s) in output/\n")

# Keep track of results
success_count = 0
skip_count    = 0
error_count   = 0

# Process each output file
for output_filename in sorted(output_files):

    print(f"Processing: {output_filename}")

    # Check if this file is in the configuration table
    if output_filename not in CATEGORY_MAP:
        print(f"  SKIP : '{output_filename}' is not in CATEGORY_MAP, skipping.")
        print(f"         Add it to the CATEGORY_MAP at the top of this script.")
        skip_count += 1
        continue

    # Get the layer file and category comment from the table
    config  = CATEGORY_MAP[output_filename]
    layer   = config["layer"]
    comment = config["comment"]

    print(f"  Layer  : {layer}")
    print(f"  Comment: {comment}")

    # Inject the output into the layer file
    result = inject(output_filename, layer, comment)

    if result:
        print(f"  OK     : Done!")
        success_count += 1
    else:
        error_count += 1

    print()

# Print summary
print("=" * 60)
print(f"Summary:")
print(f"  Successfully updated : {success_count}")
print(f"  Skipped (not found)  : {skip_count}")
print(f"  Errors               : {error_count}")
print("=" * 60)
print("Backups were created for each updated layer file (.backup)")
print("To restore: rename the .backup file back to the original name.")
