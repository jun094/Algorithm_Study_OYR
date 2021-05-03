console.log("main.js");

function solution(icecase, m, n) {
  let answer = 0;
  const visited = Array.from(Array(n), () => new Array(m).fill(false));

  function dfs(a, b) {
    if (
      a < 0 ||
      a >= n ||
      b < 0 ||
      b >= m ||
      visited[a][b] ||
      icecase[a][b] === 1
    )
      return false;
    else {
      visited[a][b] = true;
      // left
      dfs(a, b - 1);
      // right
      dfs(a, b + 1);
      // up
      dfs(a - 1, b);
      // down
      dfs(a + 1, b);
      return true;
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (dfs(i, j)) answer++;
    }
  }

  console.log(visited);

  return answer;
}

const input = [
  [0, 0, 1, 1, 0],
  [0, 0, 0, 1, 1],
  [1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0],
];

const m = 5;
const n = 4;

console.log(solution(input, m, n));
