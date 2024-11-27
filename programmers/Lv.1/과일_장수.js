function solution(k, m, score) {
  const arr = [];
  let result = 0;
  const sortScore = score.sort((a, b) => b - a);
  console.log(sortScore);
  // while(true){
  //     if(sortScore.length >= m){
  //         arr.push(sortScore.splice(0,m))
  //     }else break
  // }
  for (let i = 0; i < sortScore.length; i = i + m) {
    if (i + m <= sortScore.length) {
      arr.push(sortScore.slice(i, i + m));
    } else break;
  }

  for (let i = 0; i < arr.length; i++) {
    let min = 0;
    min = Math.min(...arr[i]);
    result += min * m;
  }

  return result;
}
