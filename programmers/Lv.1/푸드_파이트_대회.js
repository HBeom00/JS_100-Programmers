function solution(food) {
  const result = [];

  for (let i = 1; i < food.length; i++) {
    let count = 0;
    if (food[i] >= 2) count = Math.floor(food[i] / 2);
    for (let j = 0; j < count; j++) result.push(i);
  }
  result.push(0);
  for (let i = result.length - 2; i >= 0; i--) result.push(result[i]);
  return result.join("");
}
