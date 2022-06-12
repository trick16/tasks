export const generateTodoId = (url) => {
  let urlArray = url.split("/");
  return urlArray[urlArray.length - 1]
    ? urlArray[urlArray.length - 1]
    : urlArray[urlArray.length - 2];
};
