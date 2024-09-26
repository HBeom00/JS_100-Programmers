function solution(num, total) {
  for (let i = -100; i <= 100; i++) {
    if (num === 1) return [total];
    const arr = Array(num)
      .fill(i)
      .map((el, index) => el + index);
    if (arr.reduce((sum, el) => sum + el, 0) === total) return arr;
  }
}
