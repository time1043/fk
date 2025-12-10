import path from "path";
import { readJson, writeJson } from "../../../utils/json.js";
import { questionGetClean } from "../../../module/pta/multiple/question-get-clean.js";

const dir = process.argv[2];

if (!dir) {
  console.error("Usage: node question-get-clean.js <data-dir>");
  process.exit(1);
}

const inputFile = path.join(dir, "question-get.json");
const outputFile = path.join(dir, "question-get-clean.json");

const questionList = await readJson(inputFile);
const result = questionGetClean(questionList);
await writeJson(outputFile, result);
console.log(`Done: ${outputFile}`);
