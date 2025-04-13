import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import colorTokens from "../tokens/colors.json" assert { type: "json" };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outPath = path.resolve(__dirname, "../src/colors.css");

// ✅ Make sure the directory exists
fs.mkdirSync(path.dirname(outPath), { recursive: true });

// Generate classes from tokens (you already have this logic)
let css = "";

// Basic example for bg and text
for (const [group, values] of Object.entries(colorTokens)) {
  for (const [key, value] of Object.entries(values)) {
    css += `
      .bg-${group}-${key} { background-color: ${value}; }
      .text-${group}-${key} { color: ${value}; }
      .border-${group}-${key} { border-color: ${value}; }
    
      .hover\\:bg-${group}-${key}:hover { background-color: ${value}; }
      .hover\\:text-${group}-${key}:hover { color: ${value}; }
      .hover\\:border-${group}-${key}:hover { border-color: ${value}; }
    `;
  }
}

fs.writeFileSync(outPath, css);