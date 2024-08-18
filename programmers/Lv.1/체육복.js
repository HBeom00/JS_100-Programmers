function solution(n, lost, reserve) {
  let count = 0;

  // 중복된 값 제거
  const commonNum = reserve.filter((el) => lost.includes(el));

  // 오름차순 정렬
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  for (let i = 0; i < commonNum.length; i++) {
    const lostNumIdx = lost.indexOf(commonNum[i]);
    const reserveNumIdx = reserve.indexOf(commonNum[i]);
    lost.splice(lostNumIdx, 1);
    reserve.splice(reserveNumIdx, 1);
  }

  while (count < reserve.length) {
    if (lost.length > 0) {
      const temp = lost.filter((el) => {
        return el + 1 === reserve[count] || el - 1 === reserve[count];
      });

      if (temp.length !== 0) {
        const idx = lost.indexOf(temp[0]);
        lost.splice(idx, 1);
      }
    } else {
      break;
    }
    count++;
  }
  return n - lost.length;
}
