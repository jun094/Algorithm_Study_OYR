console.log("main.js");

function solution(board) {
  let answer = 0;
  const boardCount = board[0].length;
  const visited = Array.from(Array(boardCount), () =>
    Array(boardCount).fill(false)
  );

  function solvePuzzle(a, b) {
    visited[a][b] = true;
    if (a >= boardCount - 1 && b >= boardCount - 1) {
      answer++;
      return;
    }

    // up
    if (a - 1 >= 0 && board[a - 1][b] === 0 && !visited[a - 1][b]) {
      solvePuzzle(a - 1, b);
      visited[a - 1][b] = false;
    }
    // down
    if (a + 1 < boardCount && board[a + 1][b] === 0 && !visited[a + 1][b]) {
      solvePuzzle(a + 1, b);
      visited[a + 1][b] = false;
    }
    // left
    if (b - 1 >= 0 && board[a][b - 1] === 0 && !visited[a][b - 1]) {
      solvePuzzle(a, b - 1);
      visited[a][b - 1] = false;
    }
    // right
    if (b + 1 < boardCount && board[a][b + 1] === 0 && !visited[a][b + 1]) {
      solvePuzzle(a, b + 1);
      visited[a][b + 1] = false;
    }
  }

  solvePuzzle(0, 0);

  return answer;
}

const input = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

console.log(solution(input));
