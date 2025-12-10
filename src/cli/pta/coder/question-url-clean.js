import path from "path";
import { readJson, writeJson } from "../../../utils/json.js";
import { questionUrlClean } from "../../../module/pta/coder/question-url-clean.js";

const dir = process.argv[2];
const url = process.argv[3];

if (!dir || !url) {
  console.error("Usage: node question-url-clean.js <data-dir> <url>");
  process.exit(1);
}

const inputFile = path.join(dir, "url-list.json");
const outputFile = path.join(dir, "url-list-question-clean.json");

const urlList = await readJson(inputFile);
const result = questionUrlClean(urlList, url);
await writeJson(outputFile, result);
console.log(`Done: ${outputFile}`);
