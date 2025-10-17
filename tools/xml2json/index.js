#!/usr/bin/env node
const fs = require("fs");
const { parseStringPromise } = require("xml2js");

// Get CLI arguments
const [, , inputFile, outputFile = "output.json"] = process.argv;

if (!inputFile) {
  console.error("Usage: node xml-to-json.js <input.xml> [output.json]");
  process.exit(1);
}

async function convertXmlToJson() {
  try {
    // Read XML file
    const xmlData = fs.readFileSync(inputFile, "utf8");

    // Convert XML -> JSON
    const result = await parseStringPromise(xmlData, {
      explicitArray: false,   // don’t wrap single nodes in arrays
      mergeAttrs: true,       // merge attributes into the object
      trim: true,
    });

    delete result.xmlData
    result.artwork = result.artworks.artwork
    delete result.artworks
    for (const aw of result.artwork) {
        aw.id = Number.parseInt(aw.id)
        aw.own = aw.own === '1'
        aw.size = aw.measures
        aw.size.width = Number.parseInt(aw.size.width)
        aw.size.height = Number.parseInt(aw.size.height)
        aw.size.depth = Number.parseInt(aw.size.depth)
        delete aw.measures
        if (!aw.in) delete aw.in
        if (!aw.comment) delete aw.comment
        aw.material = aw.materials.material
        if (!Array.isArray(aw.material)) aw.material = [aw.material]
        delete aw.materials
    }

    // Write JSON
    fs.writeFileSync(outputFile, JSON.stringify(result, null, 2), "utf8");
    console.log(`✅ Conversion complete! JSON saved to ${outputFile}`);
  } catch (err) {
    console.error("❌ Error:", err.message);
    process.exit(1);
  }
}

convertXmlToJson();
