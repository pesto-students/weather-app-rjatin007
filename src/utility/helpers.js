export const isValidQuery = (query) => {
  const pattern = /^([a-zA-Z0-9\u0600-\u06FF\u0660-\u0669\u06F0-\u06F9 _.-]+)$/;
  return pattern.test(query);
};
