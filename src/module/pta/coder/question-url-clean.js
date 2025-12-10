/**
 * Generate question URLs from url-list data
 * @param {Object} urlList - Raw url-list data
 * @param {string} url - Sample URL to extract base URL
 * @returns {string[]} Clean URL list
 */
export const questionUrlClean = (urlList, url) => {
  const { problemSetProblems } = urlList;

  // Extract base URL up to "exam-problems"
  const baseUrl = url.match(/.*\/exam-problems/)?.[0];
  if (!baseUrl) {
    throw new Error("Invalid URL format");
  }

  return problemSetProblems.map((item) => `${baseUrl}/${item.id}`);
};
