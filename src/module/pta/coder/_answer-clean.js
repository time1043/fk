import answerList from "../../../../data/pta/mysql/8c/answer-get.json" with { type: "json" };

const answerListPz = answerList.map((answer) => {
  const { submissionDetails } = answer.submission;
  return submissionDetails[0];
});
console.log(`const answerListPz = ${JSON.stringify(answerListPz)}`);
// console.log(answerListPz);
