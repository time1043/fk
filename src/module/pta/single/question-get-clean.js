/**
 * Clean single choice questions
 * @param {Object} questionList - Raw question data
 * @returns {Array} Cleaned questions
 */
export const questionGetClean = (questionList) => {
  const { problemSetProblems } = questionList;

  return problemSetProblems.map((problem) => {
    const { id, content } = problem;
    const { choices } = problem.problemConfig.multipleChoiceProblemConfig;
    return { id, content, choices };
  });
};
