import path from "path";
import { readJson, writeJson } from "../../../utils/json.js";

export const answerAiClean = async (dir) => {
  const inputFile = path.join(dir, "answer-ai.json");
  const outputFile = path.join(dir, "answer-ai-clean.json");

  const answerList = await readJson(inputFile);

  const answerListClean = answerList.map((answer) => {
    return { ...answer, problemId: "0" };
  });

  const result = {
    problemType: "MULTIPLE_CHOICE",
    details: answerListClean,
  };

  await writeJson(outputFile, result);
  console.log(`Done: ${outputFile}`);
  return result;
};

// CLI entry
if (process.argv[1].includes("answer-ai-clean")) {
  const dir = process.argv[2];
  if (!dir) {
    console.error("Usage: node answer-ai-clean.js <data-dir>");
    process.exit(1);
  }
  answerAiClean(dir);
}
