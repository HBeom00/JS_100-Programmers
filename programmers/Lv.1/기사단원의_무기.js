function solution(number, limit, power) {
  let steel = 0;

  for (let i = 1; i <= number; i++) {
    let count = 0;
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        if (Math.pow(j, 2) === i) {
          count += 1;
        } else count += 2;
      }
    }
    if (count > limit) {
      steel += power;
    } else steel += count;
  }
  return steel;
}
