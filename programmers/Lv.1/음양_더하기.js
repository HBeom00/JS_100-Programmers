function solution(absolutes, signs) {
  const result = [];
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] === true) {
      result.push(absolutes[i]);
    } else result.push(-absolutes[i]);
  }
  return result.reduce((sum, el) => sum + el, 0);
}
