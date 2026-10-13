/*
문제27. 객체 만들기
첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고, 두번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다.

두 개를 합쳐 학생의 이름이 key이고 value가 수학 점수인 객체를 출력해주세요.
*/

const keys = ["신희범", "박광수", "김창환", "김희성"];
const values = [100, 90, 80, 70];
const obj = {};

for (let i = 0; i < keys.length; i++) {
  obj[keys[i]] = values[i];
}

console.log(obj);
