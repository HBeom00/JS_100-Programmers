/*
문제64. 이상한 엘레베이터
정량 N에 정확히 맞춰야만 움직이는 화물용 엘리베이터가 있습니다.
화물은 7kg, 3kg 두 가지이며 팔이 아픈 은후는 가장 적게 화물을 옮기고 싶습니다.

예를 들어 정량이 24kg이라면 3kg 8개를 옮기는 것보다는
7kg 3개, 3kg 1개 즉 4개로 더 적게 옮길 수 있습니다.

입력
정량 N이 입력됩니다.
*/
let today = new Date();

let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1; // 월
let date = today.getDate(); // 날짜
let day = today.getDay(); // 요일

console.log(today.toLocaleString());
console.log(year + "-" + month + "-" + date);
console.log(2024 - 7 - 17 < 2024 - 7 - 19);
