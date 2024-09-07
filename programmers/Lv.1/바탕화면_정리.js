function solution(wallpaper) {
  let count_x = "";
  let count_y = "";

  for (let i = 0; i < wallpaper.length; i++) {
    if (wallpaper[i].includes("#")) {
      count_x += i + " ";
      const indexNum1 = wallpaper[i].indexOf("#");
      const indexNum2 = wallpaper[i].lastIndexOf("#");
      count_y += indexNum1 + " ";
      count_y += indexNum2 + " ";
    }
  }
  const temp_x = count_x
    .split(" ")
    .filter((el) => el !== "")
    .map((el) => +el)
    .sort((a, b) => a - b);
  const lux = [Math.min(...temp_x), Math.max(...temp_x) + 1];

  const temp_y = count_y
    .split(" ")
    .filter((el) => el !== "")
    .map((el) => +el)
    .sort((a, b) => a - b);
  const luy = [Math.min(...temp_y), Math.max(...temp_y) + 1];

  return [lux[0], luy[0], lux[1], luy[1]];
}
