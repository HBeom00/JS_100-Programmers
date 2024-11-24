function solution(n, m, section) {
  let count = 0;
  const arr = Array(section[section.length - 1] - section[0] + 1)
    .fill(section[0])
    .map((el, index) => el + index);
  console.log(arr);
  if (m === 1) return section.length;

  for (let i = 0; i < section.length; i++) {
    if (arr.length === 0) break;

    if (arr.includes(section[i])) {
      const indexNum = arr.indexOf(section[i]);
      if (arr.length >= m) {
        arr.splice(indexNum, m);
        count += 1;
      } else {
        arr.splice(indexNum, arr.length);
        count += 1;
      }
    }
  }
  return count;
}
