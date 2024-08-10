function solution(keymap, targets) {
  const result = [];
  // targets 길이만큼 반복문 실행
  for (let i = 0; i < targets.length; i++) {
    // targets 요소의 길이
    const length = targets[i].length;
    let count = 0;
    for (let j = 0; j < length; j++) {
      let num = 1000;
      for (let k = 0; k < keymap.length; k++) {
        let temp = keymap[k].indexOf(targets[i][j]) + 1;
        if (temp > 0 && num > temp) num = temp;
      }
      count += num;
    }
    if (count >= 1000) count = -1;
    result.push(count);
  }
  return result;
}
