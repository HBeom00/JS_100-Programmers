/*
문제65. 변형된 리스트
a = [1, 2, 3, 4]
b = [a, b, c, d]
이런 리스트가 있을 때 [[1, a], [b, 2], [3, c], [d, 4]] 이런 식으로 a, b 리스트가 번갈아가면서 출력되게 해주세요.
*/

hee = [1, 2, 3, 4];
hee2 = ["a", "b", "c", "d"];
result = hee.map((el, index) => {
  if (index % 2 === 0) {
    return [el, hee2[index]];
  } else {
    return [hee2[index], el];
  }
});

console.log(result);
