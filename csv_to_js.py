# ============================================================
# Script 1: csv_to_js.py
# Purpose: Read a CSV file from the csv/ folder and write
#          the coordinates as compact [x, z] pairs into output/
#
# Folder structure:
#   unmined_tools/
#   ├── csv/               ← Put your CSV files here
#   ├── output/            ← Generated JS blocks appear here
#   ├── playerimages/      ← Your marker images
#   ├── custom.temples.js
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

# The label used in the // comments (e.g. "Ocean Monument 1", "Ocean Monument 2", ...)
LOCATION_NAME = "Ocean Monument"

# ============================================================
# PATHS - These are automatic, no need to change these
# ============================================================

SCRIPT_DIR  = os.path.dirname(os.path.abspath(__file__))
INPUT_FILE  = os.path.join(SCRIPT_DIR, "csv", INPUT_FILENAME)
OUTPUT_FILE = os.path.join(SCRIPT_DIR, "output", os.path.splitext(INPUT_FILENAME)[0] + "_output.js")

# ============================================================
# THE SCRIPT
# ============================================================

# Create folders if they don't exist
for folder in ["csv", "output"]:
    path = os.path.join(SCRIPT_DIR, folder)
    if not os.path.exists(path):
        os.makedirs(path)
        print(f"Created folder: {folder}/")

# Check if the CSV file exists
if not os.path.exists(INPUT_FILE):
    print(f"ERROR: File 'csv/{INPUT_FILENAME}' not found!")
    print(f"Make sure the CSV file is in the csv/ folder.")
    exit()

# Read the CSV and generate compact [x, z] lines
output_lines = []
with open(INPUT_FILE, newline='', encoding='utf-8') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        nummer = row['nummer'].strip()
        x      = row['X'].strip()
        z      = row['Z'].strip()
        output_lines.append(f"            // {LOCATION_NAME} {nummer}")
        output_lines.append(f"            [{x}, {z}],")

# Write output file
with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
    f.write("\n".join(output_lines))

print(f"Done! {len(output_lines) // 2} locations written to 'output/{os.path.basename(OUTPUT_FILE)}'")
print(f"You can now run inject_into_layer.py to update the layer file.")
