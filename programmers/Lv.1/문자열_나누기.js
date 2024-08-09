function solution(s) {
  let result = [];
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    result.push(s[i]);

    const x = result.filter((el) => el === result[0]);
    const other = result.filter((el) => el !== result[0]);

    if (x.length === other.length) {
      count += 1;
      result = [];
    }
  }
  if (result.length > 0) {
    count += 1;
  }
  return count;
}
