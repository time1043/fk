import path from "path";
import { readJson, writeJson } from "../../../../utils/json.js";
import { answerGetClean } from "../../../../module/pta/coder/java/answer-get-clean.js";

const dir = process.argv[2];

if (!dir) {
  console.error("Usage: node answer-get-clean.js <data-dir>");
  process.exit(1);
}

const inputFile = path.join(dir, "answer-get.json");
const outputFile = path.join(dir, "answer-get-clean.json");

const answerList = await readJson(inputFile);
const result = answerGetClean(answerList);
await writeJson(outputFile, result);
console.log(`Done: ${outputFile}`);
