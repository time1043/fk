/**
 * Clean multiple choice AI answers
 * @param {Array} answerList - Raw AI answers
 * @returns {Object} Cleaned answers with problemType
 */
export const answerAiClean = (answerList) => {
  const answerListClean = answerList.map((answer) => {
    return { ...answer, problemId: "0" };
  });

  return {
    problemType: "MULTIPLE_CHOICE_MORE_THAN_ONE_ANSWER",
    details: answerListClean,
  };
};
