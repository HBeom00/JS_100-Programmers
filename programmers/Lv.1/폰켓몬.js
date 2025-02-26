function solution(nums) {
  const set = new Set(nums);
  const max = Math.floor(nums.length / 2);

  if ([...set].length < max) {
    return [...set].length;
  } else {
    return max;
  }
}
