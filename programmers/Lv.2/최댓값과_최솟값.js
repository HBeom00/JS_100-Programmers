function solution(s) {
  const maxNum = Math.max(...s.split(" "));
  const minNum = Math.min(...s.split(" "));
  return minNum + " " + maxNum;
}
