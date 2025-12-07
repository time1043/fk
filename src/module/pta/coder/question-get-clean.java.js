import path from "path";
import { readJson, writeJson } from "../../../utils/json.js";

export const questionGetCleanJava = async (dir) => {
  const inputFile = path.join(dir, "question-get.json");
  const outputFile = path.join(dir, "question-get-clean.json");

  const questionList = await readJson(inputFile);

  const questionListClean = questionList.map((question) => {
    const { id, content, problemConfig } = question.problemSetProblem;
    return { id, content, problemConfig };
  });

  await writeJson(outputFile, questionListClean);
  console.log(`Done: ${outputFile}`);
  return questionListClean;
};

// CLI entry
if (process.argv[1].includes("question-get-clean.java")) {
  const dir = process.argv[2];
  if (!dir) {
    console.error("Usage: node question-get-clean.java.js <data-dir>");
    process.exit(1);
  }
  questionGetCleanJava(dir);
}
