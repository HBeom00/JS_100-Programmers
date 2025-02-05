function solution(n, arr1, arr2) {
  return arr1.map((el, i) => {
    const binaryNum = (el | arr2[i]).toString(2).padStart(n, "0");
    return binaryNum.replace(/1/g, "#").replace(/0/g, " ");
  });
}
