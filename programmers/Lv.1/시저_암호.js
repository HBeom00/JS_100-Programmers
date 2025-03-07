function solution(s, n) {
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  let result = "";

  for (var i = 0; i < s.length; i++) {
    if (s[i] == " ") {
      result += " ";
      continue;
    }
    let arr = upper.includes(s[i]) ? upper : lower;
    let index = arr.indexOf(s[i]) + n;
    if (index >= arr.length) index -= arr.length;
    result += arr[index];
  }
  return result;
}
