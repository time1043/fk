import path from "path";
import { readJson, writeJson } from "../../../utils/json.js";

export const answerGetClean = async (dir) => {
  const inputFile = path.join(dir, "answer-get.json");
  const outputFile = path.join(dir, "answer-get-clean.json");

  const answerList = await readJson(inputFile);

  const answerListClean = answerList.map((answer) => {
    const { submissionDetails } = answer.submission;
    return submissionDetails[0];
  });

  await writeJson(outputFile, answerListClean);
  console.log(`Done: ${outputFile}`);
  return answerListClean;
};

// CLI entry
if (process.argv[1].includes("answer-get-clean")) {
  const dir = process.argv[2];
  if (!dir) {
    console.error("Usage: node answer-get-clean.js <data-dir>");
    process.exit(1);
  }
  answerGetClean(dir);
}
