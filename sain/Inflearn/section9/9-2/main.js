console.log("main.js");

function solution(v, edges) {
  let answer = 0;
  const edgesCount = edges.length;
  const visited = new Array(v).fill(false);
  const graph = Array.from(Array(v), () => new Array(v).fill(false));
  const q = [];

  for (let i = 0; i < edgesCount; i++) {
    const [a, b] = edges[i];
    graph[a - 1].push(b);
  }

  function dfs(l) {
    visited[l - 1] = true;
    q.push(l);
    if (l >= v) {
      console.log(q);
      answer++;
      return;
    }

    for (let i = 0; i < graph[l - i].length; i++) {
      if (!visited[i]) {
        dfs(graph[l - 1][i]);
        visited[graph[l - 1][i] - 1] = false;
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

//////////////////////////////////////////////////////////////

function solution(v, edges) {
  let answer = 0;
  const edgesCount = edges.length;
  const visited = new Array(v).fill(false);
  const q = [];

  function dfs(l) {
    visited[l - 1] = true;
    q.push(l);
    if (l >= v) {
      console.log(q);
      answer++;
      return;
    }

    for (let i = 0; i < edgesCount; i++) {
      const [from, to] = edges[i];
      if (!visited[to - 1] && l === from) {
        dfs(to);
        visited[to - 1] = false;
        q.pop();
      }
    }
  }

  dfs(1);

  return answer;
}
