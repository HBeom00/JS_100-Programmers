/*
문제71. 깊이 우선 탐색
*/
const graph = {
  E: ["D", "A"],
  F: ["D"],
  A: ["E", "C", "B"],
  B: ["A"],
  C: ["A"],
  D: ["E", "F"],
};

function dfs(node) {
  const visited = {};
  const route = [];
  const stack = [node];
  const lengthOfNodes = Object.keys(graph).length;
  while (route.length != lengthOfNodes) {
    const popped = stack.pop();
    route.push(popped);
    visited[popped] = true;

    const neighbors = graph[popped];
    for (let i = neighbors.length - 1; i >= 0; i--) {
      const currentNeighbor = neighbors[i];
      if (visited.hasOwnProperty(currentNeighbor)) {
        continue;
      }
      stack.push(currentNeighbor);
    }
  }
  return route;
}
console.log(dfs("E"));
console.log(Object.keys(graph));
const visited = {};
const stack = ["E"];
const popped = stack.pop();
visited[popped] = true;
console.log(visited);
