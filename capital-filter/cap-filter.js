const capitalizeAndFilter = (arr) => {
  const capsArr = arr.map(string => string.toUpperCase());
  filtArr = capsArr.filter((string) => string.charAt(0) !== 'F');
  return filtArr;
};
module.exports = capitalizeAndFilter;
