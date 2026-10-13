/*
문제56. 객체의 함수 응용
다음의 객체가 주어졌을 때 한국의 면적과 가장 비슷한 국가와 그 차이를 출력하세요.
*/

nationWidth = {
  korea: 220877,
  Rusia: 17098242,
  China: 9596961,
  France: 543965,
  Japan: 377915,
  England: 242900,
};
const result = Object.values(nationWidth);
let min = Math.abs(parseInt(nationWidth.korea) - parseInt(nationWidth.Rusia));

for (let i = 1; i < result.length; i++) {
  if (Math.abs(parseInt(result[0]) - parseInt(result[i])) < min) {
    min = Math.abs(parseInt(result[0]) - parseInt(result[i]));
  }
}
console.log(min);
