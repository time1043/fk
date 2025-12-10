import path from "path";
import { readJson, writeJson } from "../../../utils/json.js";

const submitBodyWrap = ({ problemSetProblemId, program }) => {
  return {
    problemType: "PROGRAMMING",
    details: [
      {
        problemId: "0",
        problemSetProblemId,
        programmingSubmissionDetail: {
          program,
          compiler: "JAVAC",
        },
      },
    ],
  };
};

export const answerGetClean = async (dir) => {
  const inputFile = path.join(dir, "answer-ai.json");
  const outputFile = path.join(dir, "answer-ai-clean.json");

  const answerList = await readJson(inputFile);

  const answerListClean = answerList.map((answer) => {
    // const { problemSetProblemId, program } = answer;
    return submitBodyWrap(answer);
  });

  await writeJson(outputFile, answerListClean);
  console.log(`Done: ${outputFile}`);
  return answerListClean;
};

// CLI entry
if (process.argv[1].includes("answer-ai-clean")) {
  const dir = process.argv[2];
  if (!dir) {
    console.error("Usage: node answer-get-clean.js <data-dir>");
    process.exit(1);
  }
  answerGetClean(dir);
}
