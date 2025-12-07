import urlList from "../../../../data/pta/java/89c/url-list.json" with { type: "json" };

/*
https://pintia.cn/api/problem-sets/<...>/exam-problems/<...>
*/
const url = `https://pintia.cn/api/problem-sets/<...>/exam-problems`;
const { problemSetProblems } = urlList;
const urlListPz = problemSetProblems.map((item) => `${url}/${item.id}`);
console.log(`const urlListPz = ${JSON.stringify(urlListPz)}`);
// console.log(urlListPz);
