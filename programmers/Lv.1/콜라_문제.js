function solution(a, b, n) {
  let 콜라병 = n;
  let 정답 = 0;

  while (콜라병 >= a) {
    정답 += Math.floor(콜라병 / a) * b;
    콜라병 = Math.floor(콜라병 / a) * b + (콜라병 % a);
  }

  return 정답;
}
