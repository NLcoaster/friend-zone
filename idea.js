const fs = require("fs");
const XLSX = require("xlsx");

const START = "// MINESHAFTS START";
const END = "// MINESHAFTS END";

function readExcel(filePath) {
    const workbook = XLSX.readFile(filePath);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });

    const map = {};

    rows.forEach(row => {
        if (!row[0]) return;

        const id = row[0];
        const x = row[1];
        const z = row[3];

        map[id] = { x, z };
    });

    return map;
}

function parseExisting(content) {
    const regex = /\/\/ Mineshaft (\d+)[\s\S]*?x:\s*(-?\d+),[\s\S]*?z:\s*(-?\d+)/g;

    const map = {};
    let match;

    while ((match = regex.exec(content)) !== null) {
        const id = match[1];
        const x = match[2];
        const z = match[3];

        map[id] = { x, z };
    }

    return map;
}

function buildBlock(dataMap) {
    let result = "";

    const sortedIds = Object.keys(dataMap).sort((a, b) => a - b);

    sortedIds.forEach(id => {
        const { x, z } = dataMap[id];

        result += `// Mineshaft ${id}
{
    x: ${x},
    z: ${z},
    image: "playerimages/Abandoned_Mineshaft.png",
    imageAnchor: [0.5, 1],
    imageScale: 0.3,
},\n`;
    });

    return result;
}

function updateFile() {
    const excelFile = "mineshafts.xlsx";
    const targetFile = "mapdata.js";

    const excelData = readExcel(excelFile);

    let fileContent = fs.readFileSync(targetFile, "utf8");

    const blockMatch = new RegExp(`${START}([\\s\\S]*?)${END}`).exec(fileContent);
    const existingBlock = blockMatch ? blockMatch[1] : "";

    const existingData = parseExisting(existingBlock);

    // 🔥 MERGE
    const merged = { ...existingData, ...excelData };
    // Excel wint bij dubbele IDs

    const newBlock = buildBlock(merged);

    const replacement = `${START}\n${newBlock}${END}`;

    fileContent = fileContent.replace(
        new RegExp(`${START}[\\s\\S]*?${END}`),
        replacement
    );

    fs.writeFileSync(targetFile, fileContent);

    console.log("✅ Mineshafts geüpdatet + nieuwe toegevoegd!");
}

updateFile();