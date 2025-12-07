/* chrome console */
// const urlListPz =
const xLollipop =  "<X_LOLLIPOP>"

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchData(url) {
  const response = await fetch(url, {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json;charset=UTF-8",
      "Content-Type": "application/json",
      "x-lollipop": xLollipop,
      "x-marshmallow": "",
    },
  });
  return await response.json();
}

const answerList = []; // 👈
for (const url of urlListPz) {
  const data = await fetchData(url);
  answerList.push(data);
  await sleep(3000);
}
