/*
문제41. 소수판별
숫자가 주어지면 소수인지 아닌지 판별하는 프로그램을 작성해주세요.
소수이면 YES로, 소수가 아니면 NO로 출력해주세요.
(소수 : 1과 자기 자신만으로 나누어떨어지는 1보다 큰 양의 정수)
*/
const n = 6;
for (let i = 2; i < n; i++) {
  let result = n % i;
  if (result === 0) {
    console.log("No");
  } else {
    continue;
  }
}
if (n === 1) {
  console.log("No");
} else {
  console.log("Yes");
}
