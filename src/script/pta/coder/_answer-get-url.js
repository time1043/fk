import urlList from "../../../../data/pta/mysql/8c/url-list.json" with { type: "json" };

/*
https://pintia.cn/api/exams/<...>/problem-sets/<...>/last-submissions?problem_set_problem_id=<...>
 */
const url = `https://pintia.cn/api/exams/<...>/problem-sets/<...>/last-submissions?problem_set_problem_id=`;
const { problemSetProblems } = urlList;
const urlListPz = problemSetProblems.map((item) => `${url}${item.id}`);
console.log(`const urlListPz = ${JSON.stringify(urlListPz)}`);
// console.log(urlListPz);
