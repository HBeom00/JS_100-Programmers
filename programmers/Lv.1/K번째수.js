function solution(array, commands) {
  const result = [];
  const arr = array;

  for (let el of commands) {
    if (el[0] === el[1]) {
      const temp = arr.slice(el[0] - 1, el[0]);
      result.push(temp[0]);
    } else {
      const temp = arr.slice(el[0] - 1, el[1]);
      temp.sort((a, b) => a - b);
      result.push(temp[el[2] - 1]);
    }
  }
  return result;
}
