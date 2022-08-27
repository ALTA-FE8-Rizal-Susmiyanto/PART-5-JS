function findMaxSumSubArray(k, arr) {
  let hasil = 0;
  for (let i = 0; i < k; i++) {
    hasil += arr[i];
  }
  let sum = hasil;
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    hasil = Math.max(hasil, sum);
  }

  return hasil;
}
console.log(findMaxSumSubArray(3, [2, 1, 5, 1, 3, 2])); // 9
console.log(findMaxSumSubArray(2, [2, 3, 4, 1, 5])); // 7
console.log(findMaxSumSubArray(2, [2, 1, 4, 1, 1])); // 5
console.log(findMaxSumSubArray(3, [2, 1, 4, 1, 1])); // 7
console.log(findMaxSumSubArray(4, [2, 1, 4, 1, 1])); // 8
