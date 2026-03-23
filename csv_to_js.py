# ============================================================
# Script 1: csv_to_js.py
# Purpose: Read a CSV file from the csv/ folder and write
#          the data as JavaScript objects into the output/ folder
#
# Folder structure:
#   unmined_tools/
#   ├── csv/               ← Put your CSV files here
#   ├── output/            ← Generated JS blocks appear here
#   ├── playerimages/      ← Your marker images
#   ├── custom_temples.js
#   ├── csv_to_js.py       ← This script
#   └── inject_into_layer.py
# ============================================================

import csv
import os

# ============================================================
# SETTINGS - This is the only part you need to change
# ============================================================

# The name of your CSV file (placed in the csv/ folder)
INPUT_FILENAME = "ocean_monument.csv"

# The name of the location type (appears after the // comment)
# This must match the comment in custom_temples.js exactly!
# Examples: "Ocean Monument", "Ocean Ruin", "Desert Pyramid"
LOCATION_NAME = "Ocean Monument"

# The image used in the template (inside the playerimages/ folder)
IMAGE = "playerimages/Ocean_Monument.png"

# ============================================================
# PATHS - These are automatic, no need to change these
# ============================================================

# Get the folder where this script is located
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))

# Build the full paths to input and output files
INPUT_FILE  = os.path.join(SCRIPT_DIR, "csv", INPUT_FILENAME)
OUTPUT_FILE = os.path.join(SCRIPT_DIR, "output", os.path.splitext(INPUT_FILENAME)[0] + "_output.js")

# ============================================================
# THE TEMPLATE
# This block gets repeated for every row in the CSV
# {location_name}, {nummer}, {x} and {z} get replaced
# by the actual values from the CSV
# ============================================================

TEMPLATE = """            // {location_name} {nummer}
                {{
                    x: {x},
                    z: {z},
                    image: "{image}",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                }},"""

# ============================================================
# THE SCRIPT - This is where the actual work happens
# ============================================================

# Check if the csv/ folder exists, if not create it
csv_folder = os.path.join(SCRIPT_DIR, "csv")
if not os.path.exists(csv_folder):
    os.makedirs(csv_folder)
    print(f"Created folder: csv/")

# Check if the output/ folder exists, if not create it
output_folder = os.path.join(SCRIPT_DIR, "output")
if not os.path.exists(output_folder):
    os.makedirs(output_folder)
    print(f"Created folder: output/")

# Check if the CSV file exists
if not os.path.exists(INPUT_FILE):
    print(f"ERROR: File 'csv/{INPUT_FILENAME}' not found!")
    print(f"Make sure the CSV file is in the csv/ folder.")
    exit()

# Create an empty list to store all generated blocks
output_lines = []

# Open the CSV file and read it
with open(INPUT_FILE, newline='', encoding='utf-8') as csvfile:

    # csv.DictReader reads each row as a dictionary
    # so you can access columns by name: row['X'], row['Z'] etc.
    reader = csv.DictReader(csvfile)

    # Loop through every row in the CSV file
    for row in reader:

        # Fill in the template with the values from this row
        # .strip() removes any spaces before/after the value
        block = TEMPLATE.format(
            location_name=LOCATION_NAME,
            nummer=row['nummer'].strip(),
            x=row['X'].strip(),
            z=row['Z'].strip(),
            image=IMAGE
        )

        # Add the filled-in block to the list
        output_lines.append(block)

# Write all blocks to the output file
with open(OUTPUT_FILE, 'w', encoding='utf-8') as output:
    output.write("\n".join(output_lines))

# Let the user know it succeeded
print(f"Done! {len(output_lines)} locations written to 'output/{os.path.basename(OUTPUT_FILE)}'")
print(f"You can now run inject_into_layer.py to update custom_temples.js")
