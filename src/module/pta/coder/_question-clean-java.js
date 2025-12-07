import questionList from "../../../../data/pta/java/89c/question-get.json" with { type: "json" };

const questionListClean = questionList.map((question) => {
  const { id, content, problemConfig } = question.problemSetProblem;
  return { id, content, problemConfig };
});
// console.log(questionListClean);
console.log(JSON.stringify(questionListClean, null, 2));
