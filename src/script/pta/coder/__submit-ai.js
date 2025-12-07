/* chrome console */
// const answerListPz =
const submitUrl = `https://pintia.cn/api/exams/<...>/exam-submissions`;
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

const submitBodyWrap = (detail) => {
  return {
    problemType: "SQL_PROGRAMMING",
    details: [
      {
        problemId: "0",
        problemSetProblemId: detail.problemSetProblemId,
        sqlProgrammingSubmissionDetail: {
          program: detail.fkans,
        },
      },
    ],
  };
};

for (const ans of answerListPz) {
  const submitBody = submitBodyWrap(ans);
  await submit(submitUrl, submitBody, xLollipop);
  await sleep(3000);
}
