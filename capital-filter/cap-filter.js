const capitalizeAndFilter = (arr) => {
  const filtered = [];
  for(let i = 0; i < arr.length; i++){
    arr[i] = arr[i].toUpperCase();
    if(arr[i].charAt(0) !== 'F'){
      filtered.push(arr[i]);
    }
  }
  return filtered;

};
module.exports = capitalizeAndFilter;
