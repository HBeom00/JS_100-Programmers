function solution(s) {
  const number = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };
  const arr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ].filter((el) => s.includes(el));
  let result = s;

  for (let i of arr) {
    result = result.replaceAll(i, number[i]);
  }

  return +result;
}
