function solution(k, score) {
  const honor = []; // 명예의 전당 배열
  const result = []; // 최하위 점수 배열

  if (score.length < k) {
    for (let i = 0; i < score.length; i++) {
      honor.push(score[i]);
      result.push(Math.min(...honor));
    }
  } else {
    for (let i = 0; i < k; i++) {
      honor.push(score[i]);
      result.push(Math.min(...honor));
    }

    for (let i = k; i < score.length; i++) {
      if (Math.min(...honor) < score[i]) {
        honor.sort((a, b) => b - a);
        honor.pop();
        honor.push(score[i]);
        result.push(Math.min(...honor));
      } else {
        result.push(Math.min(...honor));
      }
    }
  }

  return result;
}
