function solution(strings, n) {
  const arr = [];
  const result = [];

  for (let i = 0; i < strings.length; i++) {
    arr.push(strings[i][n]);
  }
  arr.sort();
  const setArr = new Set(arr);

  for (let i of setArr) {
    const temp = strings.filter((el) => el[n] === i);
    if (temp.length > 1) {
      temp.sort();
      for (let j of temp) result.push(j);
    } else result.push(temp[0]);
  }

  return result;
}
