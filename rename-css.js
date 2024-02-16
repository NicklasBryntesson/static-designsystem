// Using ESM syntax
import { promises as fs } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const originalPath = join(__dirname, "designsystem", "style.css");
const newPath = join(__dirname, "designsystem", "designsystem.css");

async function renameFile() {
  try {
    await fs.rename(originalPath, newPath);
    console.log("CSS file renamed successfully.");
  } catch (err) {
    console.error("Error renaming CSS file:", err);
  }
}

renameFile();
