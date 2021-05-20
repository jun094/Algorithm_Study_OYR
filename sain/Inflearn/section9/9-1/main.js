console.log("main.js");

function solution(v, edges) {
  let answer = 0;
  const edgesCount = edges.length;
  const visited = new Array(v).fill(false);
  const graph = Array.from(Array(v), () => new Array(v).fill(false));
  const q = [];

  for (let i = 0; i < edgesCount; i++) {
    const [a, b] = edges[i];
    graph[a - 1][b - 1] = true;
  }

  function dfs(l) {
    visited[l - 1] = true;
    q.push(l);
    if (l >= v) {
      console.log(q);
      answer++;
      return;
    }

    for (let i = 0; i < v; i++) {
      if (!visited[i] && graph[l - 1][i]) {
        dfs(i + 1);
        visited[i] = false;
        q.pop();
      }
    }
  }

  dfs(1);

  return answer;
}

const input = {
  v: 5,
  edges: [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5],
  ],
};

const { v, edges } = input;

console.log(solution(v, edges));
