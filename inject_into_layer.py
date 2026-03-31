# ============================================================
# Script 2: inject_into_layer.py
# Purpose: Read output files from the output/ folder and
#          inject the [x, z] coordinates into the correct
#          const *Coords = [...] array in the layer .js file.
#
# Folder structure:
#   unmined_tools/
#   ├── csv/                  ← CSV source files
#   ├── output/               ← Generated JS blocks (input for this script)
#   ├── playerimages/         ← Your marker images
#   ├── custom.temples.js
#   ├── custom.shipwrecks.js
#   ├── custom.underground.js
#   ├── custom.villages.js
#   ├── custom.pillager.js
#   ├── custom.portals.js
#   ├── custom.spawnpoint.js
#   ├── csv_to_js.py
#   └── inject_into_layer.py  ← This script
# ============================================================

import os
import re
import shutil

# ============================================================
# CONFIGURATION TABLE
#
# Links every output filename to:
#   - "layer"  : the .js layer file to update
#   - "array"  : the exact const variable name in that file
#                (the part before "Coords", e.g. "ocean_monument" for
#                 "const ocean_monumentCoords = [")
#
# To add a new category:
#   1. Add a new line in this table
#   2. Make sure the array name matches exactly in the layer file
# ============================================================

CATEGORY_MAP = {

    # custom.temples.js
    "desert_pyramid_output.js":         {"layer": "custom.temples.js",      "array": "desert_pyramid"},
    "desert_well_output.js":            {"layer": "custom.temples.js",      "array": "desert_well"},
    "jungle_pyramid_output.js":         {"layer": "custom.temples.js",      "array": "jungle_pyramid"},
    "ocean_ruins_output.js":            {"layer": "custom.temples.js",      "array": "ocean_ruin"},
    "ocean_monument_output.js":         {"layer": "custom.temples.js",      "array": "ocean_monument"},

    # custom.shipwrecks.js
    "shipwrecks_output.js":             {"layer": "custom.shipwrecks.js",   "array": "shipwreck"},
    "treasure_output.js":               {"layer": "custom.shipwrecks.js",   "array": "chest"},

    # custom.underground.js
    "ancient_city_output.js":           {"layer": "custom.underground.js",  "array": "ancient_city"},
    "mineshafts_output.js":             {"layer": "custom.underground.js",  "array": "abandoned_mineshaft"},
    "strongholds_output.js":            {"layer": "custom.underground.js",  "array": "stronghold"},
    "trail_ruins_output.js":            {"layer": "custom.underground.js",  "array": "trail_ruin"},
    "trail_chambers_output.js":         {"layer": "custom.underground.js",  "array": "trial_chamber"},

    # custom.villages.js
    "igloo_output.js":                  {"layer": "custom.villages.js",     "array": "igloo"},
    "igloo_with_basement_output.js":    {"layer": "custom.villages.js",     "array": "igloo_with_basement"},
    "village_output.js":                {"layer": "custom.villages.js",     "array": "villagerface"},
    "zombie_village_output.js":         {"layer": "custom.villages.js",     "array": "zombievillagerface"},

    # custom.pillager.js
    "pillager_outpost_output.js":       {"layer": "custom.pillager.js",     "array": "pillager_outpost"},
    "swamp_hut_output.js":              {"layer": "custom.pillager.js",     "array": "witchface"},
    "woodland_mansion_output.js":       {"layer": "custom.pillager.js",     "array": "woodland_mansion"},

    # custom.portals.js
    "portal_nether_output.js":          {"layer": "custom.portals.js",      "array": "nether_portal"},
    "ruined_portal_output.js":          {"layer": "custom.portals.js",      "array": "ruined_portal"},
    "portal_end_output.js":             {"layer": "custom.portals.js",      "array": "end_portal"},
}

# ============================================================
# PATHS - These are automatic, no need to change these
# ============================================================

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
OUTPUT_DIR = os.path.join(SCRIPT_DIR, "output")

# ============================================================
# HELPER FUNCTION: inject one output file into a layer file
# ============================================================

def inject(output_filename, layer_filename, array_name):
    """
    Replaces the contents of a const *Coords = [...] array
    in a layer file with the new [x, z] pairs from an output file.
    """

    output_path = os.path.join(OUTPUT_DIR, output_filename)
    layer_path  = os.path.join(SCRIPT_DIR, layer_filename)
    backup_path = layer_path + ".backup"

    # Check files exist
    if not os.path.exists(output_path):
        print(f"  SKIP : 'output/{output_filename}' not found, skipping.")
        return False
    if not os.path.exists(layer_path):
        print(f"  ERROR: '{layer_filename}' not found in root folder!")
        return False

    # Read new entries and layer file
    with open(output_path, 'r', encoding='utf-8') as f:
        new_entries = f.read().strip()
    with open(layer_path, 'r', encoding='utf-8') as f:
        layer_content = f.read()

    # Find the const *Coords = [ ... ]; block and replace its contents
    # Matches: const <array_name>Coords = [\n ... \n        ];
    pattern = (
        r'(const ' + re.escape(array_name) + r'Coords\s*=\s*\[)'  # opening line
        r'[\s\S]*?'                                                  # existing contents
        r'(\s*\];)'                                                  # closing ];
    )

    match = re.search(pattern, layer_content)
    if not match:
        print(f"  ERROR: Could not find 'const {array_name}Coords = [...]' in '{layer_filename}'!")
        print(f"         Check that the array name matches exactly.")
        return False

    # Build replacement: opening + new entries + closing
    new_block = match.group(1) + "\n" + new_entries + "\n        " + match.group(2).strip()
    new_content = layer_content[:match.start()] + new_block + layer_content[match.end():]

    # Backup and write
    shutil.copy2(layer_path, backup_path)
    with open(layer_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

    return True

# ============================================================
# MAIN
# ============================================================

print("=" * 60)
print("inject_into_layer.py - Unmined layer updater")
print("=" * 60)

if not os.path.exists(OUTPUT_DIR):
    print(f"ERROR: The output/ folder does not exist.")
    print(f"Run csv_to_js.py first to generate output files.")
    exit()

output_files = sorted(f for f in os.listdir(OUTPUT_DIR) if f.endswith("_output.js"))

if not output_files:
    print("No output files found in the output/ folder.")
    print("Run csv_to_js.py first to generate output files.")
    exit()

print(f"Found {len(output_files)} output file(s) in output/\n")

success_count = 0
skip_count    = 0
error_count   = 0

for output_filename in output_files:
    print(f"Processing: {output_filename}")

    if output_filename not in CATEGORY_MAP:
        print(f"  SKIP : '{output_filename}' is not in CATEGORY_MAP, skipping.")
        print(f"         Add it to the CATEGORY_MAP at the top of this script.")
        skip_count += 1
        print()
        continue

    config = CATEGORY_MAP[output_filename]
    layer  = config["layer"]
    array  = config["array"]

    print(f"  Layer : {layer}")
    print(f"  Array : const {array}Coords = [...]")

    result = inject(output_filename, layer, array)

    if result:
        print(f"  OK    : Done!")
        success_count += 1
    else:
        error_count += 1

    print()

print("=" * 60)
print(f"Summary:")
print(f"  Successfully updated : {success_count}")
print(f"  Skipped (not found)  : {skip_count}")
print(f"  Errors               : {error_count}")
print("=" * 60)
print("Backups were created for each updated layer file (.backup)")
print("To restore: rename the .backup file back to the original name.")
