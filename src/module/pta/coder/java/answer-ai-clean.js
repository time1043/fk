import { submitBodyWrapJava } from "../../../../utils/submit.js";

/**
 * Clean Java AI answers
 * @param {Array} answerList - Raw AI answers
 * @returns {Array} Cleaned answers
 */
export const answerAiClean = (answerList) => {
  return answerList.map((answer) => submitBodyWrapJava(answer));
};
