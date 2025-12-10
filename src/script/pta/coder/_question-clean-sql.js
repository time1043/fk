import questionList from "../../../../data/pta/mysql/8c/question-get.json" with { type: "json" };

const transformImageUrls = (text) => {
  const imageUrlRegex = /!\[(.*?)\]\(~\/(.*?)\)/g;

  const transformedText = text.replace(
    imageUrlRegex,
    (match, fileName, uuid) => {
      const newAbsoluteUrl = `https://images.ptausercontent.com/${uuid}`;
      return `![${fileName}](${newAbsoluteUrl})`;
    },
  );
  return transformedText;
};

const questionListClean = questionList.map((question) => {
  const { id, content, problemConfig } = question.problemSetProblem;
  const { dialect } = problemConfig.sqlProgrammingProblemConfig;
  const transformedContent = transformImageUrls(content);
  return { id, content: transformedContent, dialect };
  // return { id, content, problemConfig };
});
// console.log(questionListClean);
console.log(JSON.stringify(questionListClean, null, 2));
