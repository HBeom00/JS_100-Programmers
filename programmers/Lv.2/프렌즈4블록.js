function solution(m, n, board) {
  const map = board.map((el) => [...el]);
  let result = 0;

  while (true) {
    const removeSet = new Set();

    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        const current = map[i][j];

        if (
          current !== "" &&
          current === map[i][j + 1] &&
          current === map[i + 1][j] &&
          current === map[i + 1][j + 1]
        ) {
          removeSet.add(`${i},${j}`);
          removeSet.add(`${i},${j + 1}`);
          removeSet.add(`${i + 1},${j}`);
          removeSet.add(`${i + 1},${j + 1}`);
        }
      }
    }

    if (removeSet.size === 0) break;

    for (const el of removeSet) {
      const [i, j] = el.split(",").map(Number);

      map[i][j] = "";
    }

    result += removeSet.size;

    for (let j = 0; j < n; j++) {
      const temp = [];

      for (let i = m - 1; i >= 0; i--) {
        if (map[i][j] !== "") temp.push(map[i][j]);
      }

      for (let i = 0; i < m; i++) {
        map[i][j] = "";
      }

      for (let k = 0; k < temp.length; k++) {
        map[m - 1 - k][j] = temp[k];
      }
    }
  }
  return result;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.19ms, 43.6MB)
// 테스트 2 〉	통과 (0.27ms, 43.9MB)
// 테스트 3 〉	통과 (0.15ms, 43.8MB)
// 테스트 4 〉	통과 (1.24ms, 44.2MB)
// 테스트 5 〉	통과 (7.78ms, 55MB)
// 테스트 6 〉	통과 (1.84ms, 45.2MB)
// 테스트 7 〉	통과 (0.56ms, 43.9MB)
// 테스트 8 〉	통과 (0.86ms, 44.2MB)
// 테스트 9 〉	통과 (0.18ms, 43.5MB)
// 테스트 10 〉	통과 (0.48ms, 43.7MB)
// 테스트 11 〉	통과 (0.95ms, 44.4MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
