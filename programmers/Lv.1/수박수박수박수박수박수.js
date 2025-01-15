function solution(n) {
  return Array(n)
    .fill("")
    .map((el, index) => {
      if (index % 2 === 0) {
        return (el += "수");
      } else return (el += "박");
    })
    .join("");
}
