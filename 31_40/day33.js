/*
문제33. 거꾸로 출력하기
한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.
*/

// let input = [2, 4, 6, 8, 9];
// console.log(input.reverse());

let input = "2 4 5 7 8";
let result = "";
input = input.split(" ").reverse();
for (let i = 0; i < input.length; i++) {
  result += input[i] + " ";
}
console.log(result);
