import { submitBodyWrapJava } from "../../../../utils/submit.js";

/**
 * Clean Java fetched answers
 * @param {Array} answerList - Raw answer data
 * @returns {Array} Cleaned answers
 */
export const answerGetClean = (answerList) => {
  return answerList.map((answer) => {
    const { submissionDetails } = answer.submission;
    const submissionDetail = submissionDetails[0];

    const { problemSetProblemId } = submissionDetail;
    const { program } = submissionDetail.programmingSubmissionDetail;

    return submitBodyWrapJava({ problemSetProblemId, program });
  });
};
