import questionList from "../../../../data/pta/network/3/question-get.json" with { type: "json" };
import fkans from "../../../../data/pta/network/3/answer-ai.json" with { type: "json" };

const { problemSetProblems } = questionList;
const questionIdList = problemSetProblems.map((problem) => problem.id);

// const { details } = fkans;
// const answerIdList = details.map((answer) => answer.problemSetProblemId);
const answerIdList = fkans.map((answer) => answer.problemSetProblemId);

// Convert to Sets for efficient comparison
const questionIds = new Set(questionIdList);
const answerIds = new Set(answerIdList);
// IDs present in both arrays
// IDs only in questions (not answered)
// IDs only in answers (no corresponding question)
const commonIds = [...questionIds].filter((id) => answerIds.has(id));
const onlyInQuestions = [...questionIds].filter((id) => !answerIds.has(id));
const onlyInAnswers = [...answerIds].filter((id) => !questionIds.has(id));

console.log("Common IDs (in both questions and answers):");
console.log(commonIds);

console.log("\nOnly in questions (not in answers):");
console.log(onlyInQuestions);

console.log("\nOnly in answers (not in questions):");
console.log(onlyInAnswers);
