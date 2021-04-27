console.log("main.js");

function solution(puzzle, m, n) {
  let answer = 0;
  const visited = Array.from(Array(n), () => new Array(m).fill(false));
  const q = [[0, 0]];
  visited[0][0] = 1;

  while (q.length) {
    // right or down
    const [a, b] = q.shift();
    console.log(a, b);

    // left
    if (b - 1 >= 0 && puzzle[a][b - 1] === 1 && !visited[a][b - 1]) {
      q.push([a, b - 1]);
      visited[a][b - 1] = visited[a][b] + 1;
    }
    // right
    if (b + 1 < m && puzzle[a][b + 1] === 1 && !visited[a][b + 1]) {
      q.push([a, b + 1]);
      visited[a][b + 1] = visited[a][b] + 1;
    }
    // up
    if (a - 1 >= 0 && puzzle[a - 1][b] === 1 && !visited[a - 1][b]) {
      q.push([a - 1, b]);
      visited[a - 1][b] = visited[a][b] + 1;
    }
    // down
    if (a + 1 < n && puzzle[a + 1][b] === 1 && !visited[a + 1][b]) {
      q.push([a + 1, b]);
      visited[a + 1][b] = visited[a][b] + 1;
    }
  }

  console.log(visited);
  if (visited[n - 1][m - 1]) answer = visited[n - 1][m - 1];

  return answer;
}

const input = [
  [1, 0, 1, 0, 1, 0],
  [1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
];
const m = 6;
const n = 5;

console.log(solution(input, m, n));
