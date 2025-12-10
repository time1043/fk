import { transformImageUrls } from "../../../../utils/text.js";

/**
 * Clean Java programming questions
 * @param {Array} questionList - Raw question data
 * @returns {Array} Cleaned questions
 */
export const questionGetCleanJava = (questionList) => {
  return questionList.map((question) => {
    const { id, content, problemConfig } = question.problemSetProblem;
    const transformedContent = transformImageUrls(content);
    return { id, content: transformedContent, problemConfig };
  });
};
