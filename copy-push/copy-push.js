const copyAndPush = (Arr, num) => {
  const newArr = Arr.slice();
  newArr.push(num);
  return newArr;
};
module.exports = copyAndPush;
