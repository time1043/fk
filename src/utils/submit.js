export const submitBodyWrapSql = ({ problemSetProblemId, program }) => {
  return {
    problemType: "SQL_PROGRAMMING",
    details: [
      {
        problemId: "0",
        problemSetProblemId,
        sqlProgrammingSubmissionDetail: {
          program,
        },
      },
    ],
  };
};

export const submitBodyWrapJava = ({ problemSetProblemId, program }) => {
  return {
    problemType: "PROGRAMMING",
    details: [
      {
        problemId: "0",
        problemSetProblemId,
        programmingSubmissionDetail: {
          program,
          compiler: "JAVAC",
        },
      },
    ],
  };
};
