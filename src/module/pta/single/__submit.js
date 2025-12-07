/* chrome console */
// const fkans = {};
const url = "https://pintia.cn/api/exams/<...>/exam-submissions";
const xLollipop = "<X_LOLLIPOP>";

fetch(url, {
  method: "POST",
  credentials: "include",
  headers: {
    Accept: "application/json;charset=UTF-8",
    "Content-Type": "application/json",
    "x-lollipop": xLollipop,
    "x-marshmallow": "",
  },
  body: JSON.stringify(fkans),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
