function solution(s) {
  const result = [0, 0];
  let s_length = 0;

  while (s.length > 1) {
    s_length = s.length;
    s = s.split("0").join("");
    result[0]++;
    result[1] += s_length - s.length;
    s = s.length.toString(2);
  }

  return result;
}
