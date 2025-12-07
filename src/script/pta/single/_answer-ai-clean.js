import answerList from "../../../../data/pta/network/7/answer-ai.json" with { type: "json" };

const answerListPz = answerList.map((answer) => {
  return { ...answer, problemId: "0" };
});
const fkans = {
  problemType: "MULTIPLE_CHOICE",
  details: answerListPz,
};
console.log(JSON.stringify(fkans, null, 2));
