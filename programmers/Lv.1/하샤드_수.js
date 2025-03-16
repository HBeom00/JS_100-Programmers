function solution(x) {
  const sum = x
    .toString()
    .split("")
    .reduce((sum, el) => sum + parseInt(el), 0);
  return x / sum === Math.floor(x / sum) ? true : false;
}
