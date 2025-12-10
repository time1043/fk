import urlList from "../../../../data/pta/java/89c/url-list.json" with { type: "json" };

const url = `https://pintia.cn/api/problem-sets/<PROBLEM_SET_ID>/exam-problems`;
const { problemSetProblems } = urlList;
const urlListPz = problemSetProblems.map((item) => `${url}/${item.id}`);
console.log(`const urlListPz = ${JSON.stringify(urlListPz)}`);
// console.log(urlListPz);
