console.log("main.js");

function solution(board) {
  let answer = 0;
  const boardLength = board.length;
  const visited = {};
  const q = [];
  const deltas = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  visited["up"] = Array.from(Array(boardLength), () =>
    Array(boardLength).fill(false)
  );
  visited["down"] = Array.from(Array(boardLength), () =>
    Array(boardLength).fill(false)
  );
  visited["left"] = Array.from(Array(boardLength), () =>
    Array(boardLength).fill(false)
  );
  visited["right"] = Array.from(Array(boardLength), () =>
    Array(boardLength).fill(false)
  );

  console.log(visited);

  q.push([
    { row: 0, col: 0, dir: "right", time: 0 },
    { row: 0, col: 1, dir: "left", time: 0 },
  ]);

  visited["right"][0][0] = true;
  visited["left"][0][1] = true;

  function isValid(ptr) {
    for (let i = 0; i < 2; i++) {
      if (
        ptr[i].row < 0 ||
        ptr[i].row > boardLength - 1 ||
        ptr[i].col < 0 ||
        ptr[i].col > N - 1
      )
        return false;
      if (board[ptr[i].row][ptr[i].col] === 1) return false;
      if (visited[ptr[i].dir][ptr[i].row][ptr[i].col] === true) return false;
    }
    return true;
  }

  function bfs() {
    while (q.length) {
      let curr = q.shift();
      let newPt = null;
      for (let d = 0; d < 4; d++) {
        for (let i = 0; i < 2; i++) {
          newPt = [
            {
              row: curr[i].row + deltas[d][0],
              col: curr[i].col + deltas[d][1],
              dir: curr[i].dir,
              time: curr[i].time + 1,
            },
          ];
        }
        if (!isValid(newPt)) continue;
        for (let i = 0; i < 2; i++) {
          if (
            newPt[i].row === boardLength - 1 &&
            newPt[i].col === boardLength - 1
          )
            return newPt[i].time;
          visited[newPt[i].dir][newPt[i].row][newPt[i].col] = true;
        }
        q.push([newPt[0], newPt[1]]);
      }
    }
  }

  for (let i = 0; i < boardLength; i++) {}

  return answer;
}

const input = [
  [0, 0, 0, 1, 1],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 1, 1],
  [1, 1, 0, 0, 1],
  [0, 0, 0, 0, 0],
];

console.log(solution(input));
