import path from "path";
import { readJson, writeJson } from "../../../utils/json.js";

export const questionGetClean = async (dir) => {
  const inputFile = path.join(dir, "question-get.json");
  const outputFile = path.join(dir, "question-get-clean.json");

  const questionList = await readJson(inputFile);
  const { problemSetProblems } = questionList;

  const questionListClean = problemSetProblems.map((problem) => {
    const { id, content } = problem;
    const { choices } = problem.problemConfig.multipleChoiceProblemConfig;
    return { id, content, choices };
  });

  await writeJson(outputFile, questionListClean);
  console.log(`Done: ${outputFile}`);
  return questionListClean;
};

// CLI entry
if (process.argv[1].includes("question-get-clean")) {
  const dir = process.argv[2];
  if (!dir) {
    console.error("Usage: node question-get-clean.js <data-dir>");
    process.exit(1);
  }
  questionGetClean(dir);
}
