/*
문제48. 대소문자 바꿔서 출력하기
문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.
입력 : AAABBBcccddd
출력 : aaabbbCCCDDD
*/

const input = "AAABBBcccddd";
let result = "";
for (let i = 0; i < input.length; i++) {
  if (input[i] === input[i].toUpperCase()) {
    result += input[i].toLowerCase();
  } else {
    result += input[i].toUpperCase();
  }
}

console.log(result);
