console.log("main.js");

function solution(board) {
  let answer = 0;
  const boardCounts = board[0].length;
  const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  const dy = [0, 1, 1, 1, 0, -1, -1, -1];
  const q = [];

  function isIsland() {
    while (q.length) {
      const [cy, cx] = q.shift();
      for (let i = 0; i < 8; i++) {
        const nx = cx + dx[i];
        const ny = cy + dy[i];

        if (
          nx >= 0 &&
          nx < boardCounts &&
          ny >= 0 &&
          ny < boardCounts &&
          board[ny][nx] === 1
        ) {
          board[ny][nx] = 0;
          q.push([ny, nx]);
        }
      }
    }
  }

  function findIsland() {
    for (let i = 0; i < boardCounts; i++) {
      for (let j = 0; j < boardCounts; j++) {
        if (board[i][j] === 1) {
          board[i][j] = 0;
          q.push([i, j]);
          debugger;
          isIsland();
          answer++;
        }
      }
    }
  }

  findIsland();

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
