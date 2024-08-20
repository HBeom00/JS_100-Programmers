function solution(s) {
  console.log(s.split(" "));
  console.log(" ".substring(0, 1).toUpperCase());
  const result = s
    .split(" ")
    .map(
      (el) => el.substring(0, 1).toUpperCase() + el.substring(1).toLowerCase()
    );
  return result.join(" ");
}
