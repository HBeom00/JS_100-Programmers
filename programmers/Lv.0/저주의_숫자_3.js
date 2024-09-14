function solution(n) {
  const result = [];

  for (let i = 1; i <= 1000; i++) {
    if ((i + 3) % 3 !== 0 && !i.toString().includes("3")) {
      result.push(i);
    } else continue;

    if (n === result.length) break;
  }

  return result[n - 1];
}
