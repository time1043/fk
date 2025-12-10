import { transformImageUrls } from "../../../../utils/text.js";

/**
 * Clean SQL programming questions
 * @param {Array} questionList - Raw question data
 * @returns {Array} Cleaned questions
 */
export const questionGetCleanSql = (questionList) => {
  return questionList.map((question) => {
    const { id, content, problemConfig } = question.problemSetProblem;
    const { dialect } = problemConfig.sqlProgrammingProblemConfig;
    const transformedContent = transformImageUrls(content);
    return { id, content: transformedContent, dialect };
  });
};
