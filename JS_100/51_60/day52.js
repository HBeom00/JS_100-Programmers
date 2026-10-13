/*
문제52. quick sort
다음 빈 칸을 채워 퀵 정렬을 완성해주세요.
*/

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
  //와우....이해 굿
}

const array = "5 8 4 1 9 3 7".split(" ").map((n) => parseInt(n, 10));

console.log(quickSort(array));
