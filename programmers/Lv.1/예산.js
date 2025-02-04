function solution(d, budget) {
  const arr = d.sort((a, b) => a - b);
  let result = 0;
  let count = 0;

  for (let i = 0; i < d.length; i++) {
    result += d[i];
    if (result <= budget) {
      count++;
    } else break;
  }

  return count;
}
