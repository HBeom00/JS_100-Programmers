function solution(answers) {
  // 1번
  const one = [1, 2, 3, 4, 5];
  let one_answer = 0;
  let one_index = 0;
  // 2번
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  let two_answer = 0;
  let two_index = 0;
  // 3번
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let three_answer = 0;
  let three_index = 0;
  // 개인별 맞힌 개수 담을 배열
  const result = [];

  for (let i = 0; i < answers.length; i++) {
    // 1번
    if (one_index > one.length - 1) one_index = 0;
    if (answers[i] === one[one_index]) {
      one_answer += 1;
      one_index++;
    } else one_index++;
    // 2번
    if (two_index > two.length - 1) two_index = 0;
    if (answers[i] === two[two_index]) {
      two_answer += 1;
      two_index++;
    } else two_index++;
    //3번
    if (three_index > three.length - 1) three_index = 0;
    if (answers[i] === three[three_index]) {
      three_answer += 1;
      three_index++;
    } else three_index++;
  }
  result.push(one_answer);
  result.push(two_answer);
  result.push(three_answer);
  const max = Math.max(...result);
  const result2 = [];
  for (let i = 0; i < result.length; i++) {
    if (result[i] === max) result2.push(i + 1);
  }
  return result2.sort((a, b) => a - b);
}
