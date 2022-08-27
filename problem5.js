function removeDuplicates(arr) {
  let uniqueArr = [];

  // loop through array
  for (let i of arr) {
    if (uniqueArr.indexOf(i) === -1) {
      uniqueArr.push(i);
    }
  }
  console.log(uniqueArr);
}
let array = [2, 3, 3, 6, 9, 9];

removeDuplicates(array);
