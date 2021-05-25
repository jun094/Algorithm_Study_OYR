console.log("main.js");

function solution(board) {
  let answer = 0;
  const n = board[0].length;
  const visited = Array.from(Array(n), () => Array(n).fill(false));

  function isIsland(y, x) {
    visited[y][x] = true;
    if (y >= n - 1 && x >= n - 1) return;
    // down
    if (y + 1 < n && board[y + 1][x] === 1 && !visited[y + 1][x]) {
      isIsland(y + 1, x);
    }
    // down-right
    if (
      y + 1 < n &&
      x + 1 < n &&
      board[y + 1][x + 1] === 1 &&
      !visited[y + 1][x + 1]
    ) {
      isIsland(y + 1, x + 1);
    }
    // right
    if (x + 1 < n && board[y][x + 1] === 1 && !visited[y][x + 1]) {
      isIsland(y, x + 1);
    }
    // up
    if (y - 1 > -1 && board[y - 1][x] === 1 && !visited[y - 1][x]) {
      isIsland(y - 1, x);
    }
    // up-right
    if (
      y - 1 > -1 &&
      x + 1 < n &&
      board[y - 1][x + 1] === 1 &&
      !visited[y - 1][x + 1]
    ) {
      isIsland(y - 1, x + 1);
    }
    // up-left
    if (
      y - 1 > -1 &&
      x - 1 > -1 &&
      board[y - 1][x - 1] === 1 &&
      !visited[y - 1][x - 1]
    ) {
      isIsland(y - 1, x - 1);
    }
    // left
    if (x - 1 > -1 && board[y][x - 1] === 1 && !visited[y][x - 1]) {
      isIsland(y, x - 1);
    }
    // down-left
    if (
      y + 1 < n &&
      x - 1 > -1 &&
      board[y + 1][x - 1] === 1 &&
      !visited[y + 1][x - 1]
    ) {
      isIsland(y + 1, x - 1);
    }
  }

  function findIsland() {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (board[i][j] === 1 && !visited[i][j]) {
          isIsland(i, j);
          answer++;
        }
      }
    }
  }

  findIsland();
  console.log(
    visited.slice().map((y) => y.slice().map((x) => (x ? "O" : "X")))
  );

  return answer;
}

const input = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];

console.log(solution(input));
