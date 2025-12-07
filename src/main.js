// import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { HumanMessage, SystemMessage } from "langchain";
import questionList from "../data/pta/mysql/6-coder/question-get.json" with { type: "json" };
import { llmDeepseek, llmGoogle } from "./lib/llm.js";
import { systemPrompt } from "./module/pta/prompt/coder.js";
import { submitFetch } from "./utils/submit.js";

export const transformImageUrls = (text) => {
  // `![filename.png](~/uuid.png)
  // `(.*?)` is a capturing group
  // Capture group 1: filename (e.g., 5-6.png, student.png)
  // Capture group 2: UUID (e.g., 815caa54-8dae-4658-83f5-d89f29051c34.png)
  const imageUrlRegex = /!\[(.*?)\]\(~\/(.*?)\)/g;

  // Use the replace method to substitute the matched strings
  // The callback function provides:
  // - match: The full matched string (e.g., `![5-6.png](~/...)`)
  // - filename: The content of the first capture group (e.g., `5-6.png`)
  // - uuid: The content of the second capture group (e.g., `815caa54-8dae-4658-83f5-d89f29051c34.png`)
  const transformedText = text.replace(
    imageUrlRegex,
    (match, fileName, uuid) => {
      const newAbsoluteUrl = `https://images.ptausercontent.com/${uuid}`;
      return `![${fileName}](${newAbsoluteUrl})`;
    },
  );
  return transformedText;
};

const removeSqlCodeFences = (text) => {
  // Regular expression to match '```sql' at the beginning of a line
  // and '```' at the beginning of a line.
  // The 'm' flag makes '^' and '$' match the start/end of lines, not just the start/end of the string.
  const fenceRegex = /^```sql\n|^```\n?/gm;

  // Replace all occurrences of the fences with an empty string.
  const cleanedText = text.replace(fenceRegex, "");
  return cleanedText;
};

// questionList.map((q) => {
//   const { id, content } = q.problemSetProblem;
//   return { id, content };
// });

const { id, content, problemConfig } = questionList[6].problemSetProblem;
const { dialect } = problemConfig.sqlProgrammingProblemConfig;
const transformedContent = transformImageUrls(content);

const messages = [
  new SystemMessage(systemPrompt(`${dialect}`)),
  new HumanMessage(transformedContent),
];
console.log(messages); // 👂

const aiMsg = await llmDeepseek.invoke(messages);
console.log(aiMsg); // 👂

const submitUrl = `https://pintia.cn/api/exams/<...>/exam-submissions`;
const xLollipop = `<X_LOLLIPOP>`;
const ans = removeSqlCodeFences(aiMsg.content);
const res = submitFetch(submitUrl, xLollipop, ans, id);
console.log(res); // 👂👂👂
