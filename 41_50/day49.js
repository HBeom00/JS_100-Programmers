/*
문제49. 최댓값 구하기
순서가 없는 10개의 숫자가 공백으로 구분되어 주어진다. 주어진 숫자들 중 최댓값을 반환하라.
입력 : 10 9 8 7 6 5 4 3 2 1
출력 : 10
*/

const str = "10 9 8 7 11 5 4 33 2 1";
const arr = str.split(" ").map((el) => {
  return parseInt(el, 10);
});

arr.sort((a, b) => {
  return b - a;
});

console.log(arr[0]);
