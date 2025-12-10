import path from "path";
import { readJson, writeJson } from "../../../utils/json.js";
import { answerUrlClean } from "../../../module/pta/coder/answer-url-clean.js";

const dir = process.argv[2];
const url = process.argv[3];

if (!dir || !url) {
  console.error("Usage: node answer-url-clean.js <data-dir> <url>");
  process.exit(1);
}

const inputFile = path.join(dir, "url-list.json");
const outputFile = path.join(dir, "url-list-answer-clean.json");

const urlList = await readJson(inputFile);
const result = answerUrlClean(urlList, url);
await writeJson(outputFile, result);
console.log(`Done: ${outputFile}`);
