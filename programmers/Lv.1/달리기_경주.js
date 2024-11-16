function solution(players, callings) {
  const temp = {};

  players.forEach((el, idx) => {
    temp[el] = idx;
  });

  callings.forEach((el) => {
    const Idx = temp[el];
    const prevPlayer = players[Idx - 1];

    players[Idx - 1] = el;
    players[Idx] = prevPlayer;

    players[el]--;
    players[prevPlayer]++;

    temp[el]--;
    temp[prevPlayer]++;
  });
  return players;
}
