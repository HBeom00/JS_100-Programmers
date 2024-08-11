function solution(s, skip, index) {
  const result = [];
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const temp = alphabet.filter((el) => !skip.includes(el));

  for (let i = 0; i < s.length; i++) {
    let afterIdx = temp.indexOf(s[i]) + index;
    if (afterIdx > temp.length - 1) afterIdx %= temp.length;
    result.push(temp[afterIdx]);
  }
  return result.join("");
}
