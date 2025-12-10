export const transformImageUrls = (text) => {
  const imageUrlRegex = /!\[(.*?)\]\(~\/(.*?)\)/g; // []()
  return text.replace(imageUrlRegex, (match, fileName, uuid) => {
    const newAbsoluteUrl = `https://images.ptausercontent.com/${uuid}`;
    return `![${fileName}](${newAbsoluteUrl})`;
  });
};
