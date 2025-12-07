export const submitBody = (aiAnswer, questionId) => {
  return {
    problemType: "SQL_PROGRAMMING",
    details: [
      {
        problemId: "0",
        problemSetProblemId: questionId,
        sqlProgrammingSubmissionDetail: {
          program: aiAnswer,
        },
      },
    ],
  };
};

export const submitFetchSingle = (
  submitUrl,
  xLollipop,
  aiAnswer,
  questionId,
) => `
const submitBody = ${JSON.stringify(submitBody(aiAnswer, questionId))};
const response = fetch('${submitUrl}', {
  method: 'POST',
  credentials: 'include', 
  headers: {
    "Accept": "application/json;charset=UTF-8",
    'Content-Type': 'application/json',
    "x-lollipop": "${xLollipop}",
    "x-marshmallow": "",
  },
  body: JSON.stringify(submitBody), 
});
const data = await response.json();
console.log(data);
`;
