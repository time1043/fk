import path from "path";
import { readJson, writeJson } from "../../../utils/json.js";

const transformImageUrls = (text) => {
  const imageUrlRegex = /!\[(.*?)\]\(~\/(.*?)\)/g;
  return text.replace(imageUrlRegex, (match, fileName, uuid) => {
    const newAbsoluteUrl = `https://images.ptausercontent.com/${uuid}`;
    return `![${fileName}](${newAbsoluteUrl})`;
  });
};

export const questionGetCleanSql = async (dir) => {
  const inputFile = path.join(dir, "question-get.json");
  const outputFile = path.join(dir, "question-get-clean.json");

  const questionList = await readJson(inputFile);

  const questionListClean = questionList.map((question) => {
    const { id, content, problemConfig } = question.problemSetProblem;
    const { dialect } = problemConfig.sqlProgrammingProblemConfig;
    const transformedContent = transformImageUrls(content);
    return { id, content: transformedContent, dialect };
  });

  await writeJson(outputFile, questionListClean);
  console.log(`Done: ${outputFile}`);
  return questionListClean;
};

// CLI entry
if (process.argv[1].includes("question-get-clean.sql")) {
  const dir = process.argv[2];
  if (!dir) {
    console.error("Usage: node question-get-clean.sql.js <data-dir>");
    process.exit(1);
  }
  questionGetCleanSql(dir);
}
