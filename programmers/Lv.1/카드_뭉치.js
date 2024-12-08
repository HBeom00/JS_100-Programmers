function solution(cards1, cards2, goal) {
  const arr1 = [];
  const arr2 = [];
  let result = 0;

  for (let i = 0; i < goal.length; i++) {
    let indexNum = 0;
    if (cards1.includes(goal[i])) {
      indexNum = cards1.indexOf(goal[i]);
      arr1.push(indexNum);
    } else if (cards2.includes(goal[i])) {
      indexNum = cards2.indexOf(goal[i]);
      arr2.push(indexNum);
    }
  }

  for (let i = 1; i < arr1.length; i++) {
    if (arr1[i - 1] + 1 !== arr1[i]) result = 1;
  }
  for (let i = 1; i < arr2.length; i++) {
    if (arr2[i - 1] + 1 !== arr2[i]) result = 1;
  }
  return result === 0 ? "Yes" : "No";
}
