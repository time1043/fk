/* chrome console */
// const fkans =
const submitUrl = `https://pintia.cn/api/exams/<EXAM_ID>/exam-submissions`;
const xLollipop = `<X_LOLLIPOP>`;

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function submit(submitUrl, submitBody, xLollipop) {
  const response = await fetch(submitUrl, {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json;charset=UTF-8",
      "Content-Type": "application/json",
      "x-lollipop": xLollipop,
      "x-marshmallow": "",
    },
    body: JSON.stringify(submitBody),
  });
  const data = await response.json();
  console.log(data);
  await sleep(3000);
}

for (const ans of fkans) {
  await submit(submitUrl, ans, xLollipop);
  await sleep(3000);
}
