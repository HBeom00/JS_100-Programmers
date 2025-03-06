function solution(s) {
  const result = [];
  const temp = [...s];

  for (let i = 0; i < temp.length; i++) {
    if (temp.indexOf(temp[i]) < i) {
      const indexArr = temp
        .map((el, index) => {
          if (temp[index] === temp[i]) return index;
        })
        .filter((el) => el !== undefined);
      const indexNum = indexArr.indexOf(i);
      result.push(indexArr[indexNum] - indexArr[indexNum - 1]);
    } else result.push(-1);
  }
  return result;
}
