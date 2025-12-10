import path from "path";
import { readJson, writeJson } from "../../../utils/json.js";
import { answerAiClean } from "../../../module/pta/multiple/answer-ai-clean.js";

const dir = process.argv[2];

if (!dir) {
  console.error("Usage: node answer-ai-clean.js <data-dir>");
  process.exit(1);
}

const inputFile = path.join(dir, "answer-ai.json");
const outputFile = path.join(dir, "answer-ai-clean.json");

const answerList = await readJson(inputFile);
const result = answerAiClean(answerList);
await writeJson(outputFile, result);
console.log(`Done: ${outputFile}`);
