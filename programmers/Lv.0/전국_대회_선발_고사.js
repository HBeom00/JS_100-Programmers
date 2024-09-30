function solution(rank, attendance) {
  let result = [];
  const sortRank = [...rank].sort((a, b) => a - b);

  for (let i = 0; i < sortRank.length; i++) {
    const findIndexNum = rank.indexOf(sortRank[i]);

    if (result.length === 3) break;

    if (attendance[findIndexNum] === true) {
      result.push(findIndexNum);
    } else continue;
  }

  return 10000 * result[0] + 100 * result[1] + result[2];
}
