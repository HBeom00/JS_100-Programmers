function solution(a, b) {
  const arr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const month = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  let count = 0;

  for (let i = 0; i < a - 1; i++) {
    count += arr[i];
  }
  count += b;

  return count % 7 !== 0 ? month[(count % 7) - 1] : month[month.length - 1];
}
