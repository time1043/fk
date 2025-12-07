import questionList from "../data/java/question1.json" with { type: "json" };

// clean data
const questionListPz = questionList.map((question) => {
  const { questionId, questionName, answerList } = question;
  const answerResult = answerList.map((answer) => {
    const { comments, quizQuestionId, ...ans } = answer;
    return { ...ans };
  });

  return { questionId, questionName, answerList: answerResult };
});
console.log(JSON.stringify(questionListPz, null, 2));
