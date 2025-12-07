import { readJson } from "./lib/read.js";

const res = await readJson("data/pta/mysql/6c/url.origin.json");
console.log(res);
