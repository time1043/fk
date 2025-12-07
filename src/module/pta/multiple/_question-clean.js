import questionList from "../../../../data/pta/java/67m/question-get.json" with { type: "json" };

// clean data
const { problemSetProblems } = questionList;
const questionListPz = problemSetProblems.map((problem) => {
  const { id, content } = problem;
  const { choices } =
    problem.problemConfig.multipleChoiceMoreThanOneAnswerProblemConfig;
  return { id, content, choices };
});
console.log(questionListPz);
//  console.log(JSON.stringify(questionListPz, null, 2));
