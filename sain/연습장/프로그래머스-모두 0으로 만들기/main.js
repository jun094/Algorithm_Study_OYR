console.log("main.js");

function solution(a, edges) {
  let answer = null;
  const vLen = a.length;
  const linkInfo = Array.from(Array(vLen), () => new Array());
  const visited = Array(vLen).fill(false);

  for (let i = 0; i < edges.length; i++) {
    const [from, to] = edges[i];
    if (!linkInfo[from].includes(to)) linkInfo[from].push(to);
    if (!linkInfo[to].includes(from)) linkInfo[to].push(from);
  }

  function dfs(v) {
    visited[v] = true;

    for (let i = 0; i < linkInfo[v].length; i++) {
      const search = linkInfo[v][i];
      if (!visited[search]) {
        dfs(search);
        const diff = 0 - a[search];
        a[v] -= diff;
        answer += Math.abs(diff);
      }
    }
  }

  if (a.reduce((acc, value) => acc + value, 0)) return -1;
  dfs(0);

  return answer;
}

const input1 = {
  a: [-5, 0, 2, 1, 2],
  edges: [
    [0, 1],
    [3, 4],
    [2, 3],
    [0, 3],
  ],
};

const input2 = {
  a: [0, 1, 0],
  edges: [
    [0, 1],
    [1, 2],
  ],
};

const { a, edges } = input2;

console.log(solution(a, edges));
