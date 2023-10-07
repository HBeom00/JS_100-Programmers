/*
문제46. 각 자리수의 합 2
1부터 20까지의(20을 포함) 모든 숫자를 일렬로 놓고 모든 자릿수의 총 합을 구하세요. 

예를 들어 10부터 15까지의 모든 숫자를 일렬로 놓으면 101112131415이고 
각 자리의 숫자를 더하면 21입니다. (1+0+1+1+1+2+1+3+1+4+1+5 = 21)
*/

let hee = "1011121314157";
const b = hee.split("");

let a = b.reduce((sum, i) => {
  return parseInt(sum) + parseInt(i);
}, 0);
console.log(a);

// let hee = "1011121314157";
// let result = 0;
// for (let i = 0; i < hee.length; i++) {
//   result += parseInt(hee[i]);
// }
// console.log(result);
