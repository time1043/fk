import path from "path";
import { readJson, writeJson } from "../../../../utils/json.js";

export const questionUrlClean = async (dir, url) => {
  const inputFile = path.join(dir, "url-list.json");
  const outputFile = path.join(dir, "url-list-question-clean.json");

  const urlList = await readJson(inputFile);
  const { problemSetProblems } = urlList;

  // 截取到 exam-problems 为止作为 baseUrl
  const baseUrl = url.match(/.*\/exam-problems/)?.[0];
  if (!baseUrl) {
    throw new Error("Invalid URL format");
  }

  const urlListClean = problemSetProblems.map((item) => `${baseUrl}/${item.id}`);

  await writeJson(outputFile, urlListClean);
  console.log(`Done: ${outputFile}`);
  return urlListClean;
};

// CLI entry
if (process.argv[1].includes("question-url-clean")) {
  const dir = process.argv[2];
  const url = process.argv[3];
  if (!dir || !url) {
    console.error("Usage: node question-url-clean.js <data-dir> <url>");
    process.exit(1);
  }
  questionUrlClean(dir, url);
}
