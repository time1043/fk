/**
 * Generate answer URLs from url-list data
 * @param {Object} urlList - Raw url-list data
 * @param {string} url - Sample URL to extract base URL
 * @returns {string[]} Clean URL list
 */
export const answerUrlClean = (urlList, url) => {
  const { problemSetProblems } = urlList;

  // Extract base URL up to "last-submissions", append query params
  const baseUrl = url.match(/.*\/last-submissions/)?.[0];
  if (!baseUrl) {
    throw new Error("Invalid URL format");
  }

  return problemSetProblems.map(
    (item) => `${baseUrl}?problem_set_problem_id=${item.id}`,
  );
};
