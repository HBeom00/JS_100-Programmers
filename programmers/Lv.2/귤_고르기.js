function solution(k, tangerine) {
  // 서로 크기가 다른 귤 객체
  const sizes = {};
  // key(해당 귤 크기)가 없으면 추가, 있으면 기존 개수 증가
  tangerine.forEach((it) => (sizes[it] ? sizes[it]++ : (sizes[it] = 1)));
  // 객체의 value 값(귤 개수만 가져옴)
  const fruits = Object.values(sizes);

  // 내림차순 정렬 (귤 종류를 최소화려면 많은 귤 종류부터 채워야 함)
  fruits.sort((a, b) => b - a);

  // 총 귤 개수
  let sum = 0;
  // 귤 종류
  let count = 0;

  // 최소 귤 개수 반복문으로 확인
  for (let fruit of fruits) {
    sum += fruit;
    count++;
    if (sum >= k) return count;
  }
}
