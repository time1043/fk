import answerList from "../../../../data/pta/java/67m/answer-ai.json" with { type: "json" };

const answerListPz = answerList.map((answer) => {
  return { ...answer, problemId: "0" };
});
const fkans = {
  problemType: "MULTIPLE_CHOICE_MORE_THAN_ONE_ANSWER",
  details: answerListPz,
};
console.log(JSON.stringify(fkans, null, 2));
