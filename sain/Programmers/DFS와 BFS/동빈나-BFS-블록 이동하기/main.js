console.log("main.js");

class BNode {
  constructor(pos1x, pos1y, pos2x, pos2y, dist) {
    this.pos1x = pos1x;
    this.pos1y = pos1y;
    this.pos2x = pos2x;
    this.pos2y = pos2y;
    this.dist = dist;
  }

  getPos1X() {
    return this.pos1x;
  }

  getPos1Y() {
    return this.pos1y;
  }

  getPos2X() {
    return this.pos2x;
  }

  getPos2Y() {
    return this.pos2y;
  }

  getDist() {
    return this.dist;
  }
}

function solution(board) {
  let answer = 0;
  const boardLength = board.length;
  const newBoard = Array.from(Array(boardLength + 2), () =>
    Array(boardLength + 2).fill(1)
  );
  const first = new BNode(1, 1, 1, 2, 0);
  const q = [first];
  const visited = [first];

  for (let i = 0; i < boardLength; i++) {
    for (let j = 0; j < boardLength; j++) {
      newBoard[i + 1][j + 1] = board[i][j];
    }
  }

  function getNextPos(pos, board) {
    const nextPos = [];
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    for (let i = 0; i < 4; i++) {
      const pos1NextX = pos.getPos1X() + dx[i];
      const pos1NextY = pos.getPos1Y() + dy[i];
      const pos2NextX = pos.getPos2X() + dx[i];
      const pos2NextY = pos.getPos2Y() + dy[i];
      const distNext = pos.getDist() + 1;
      if (
        board[pos1NextX][pos1NextY] === 0 &&
        board[pos2NextX][pos2NextY] === 0
      ) {
        nextPos.push(
          new BNode(pos1NextX, pos1NextY, pos2NextX, pos2NextY, distNext)
        );
      }
    }
    const hor = [-1, 1];
    if (pos.getPos1X() === pos.getPos2X()) {
      for (let i = 0; i < 2; i++) {
        if (
          board[pos.getPos1X() + hor[i]][pos.getPos1Y()] === 0 &&
          board[pos.getPos2X() + hor[i]][pos.getPos2Y()] === 0
        ) {
          nextPos.push(
            new BNode(
              pos.getPos1X(),
              pos.getPos1Y(),
              pos.getPos1X() + hor[i],
              pos.getPos1Y(),
              pos.getDist() + 1
            )
          );
          nextPos.push(
            new BNode(
              pos.getPos2X(),
              pos.getPos2Y(),
              pos.getPos2X() + hor[i],
              pos.getPos2Y(),
              pos.getDist() + 1
            )
          );
        }
      }
    }
    const ver = [-1, 1];
    if (pos.getPos1Y() === pos.getPos2Y()) {
      for (let i = 0; i < 2; i++) {
        if (
          board[pos.getPos1X()][pos.getPos1Y() + ver[i]] == 0 &&
          board[pos.getPos2X()][pos.getPos2Y() + ver[i]] == 0
        ) {
          nextPos.push(
            new BNode(
              pos.getPos1X(),
              pos.getPos1Y(),
              pos.getPos1X(),
              pos.getPos1Y() + ver[i],
              pos.getDist() + 1
            )
          );
          nextPos.push(
            new BNode(
              pos.getPos2X(),
              pos.getPos2Y(),
              pos.getPos2X(),
              pos.getPos2Y() + ver[i],
              pos.getDist() + 1
            )
          );
        }
      }
    }
    return nextPos;
  }

  while (q.length) {
    let pos = q.shift();
    if (
      (pos.getPos1X() === boardLength && pos.getPos1Y() === boardLength) ||
      (pos.getPos2X() === boardLength && pos.getPos2Y() === boardLength)
    ) {
      return pos.getDist();
    }
    const nextPos = getNextPos(pos, newBoard);
    for (let i = 0; i < nextPos.length; i++) {
      let check = true;
      pos = nextPos[i];
      for (let j = 0; j < visited.length; j++) {
        if (
          pos.getPos1X() === visited[j].getPos1X() &&
          pos.getPos1Y() === visited[j].getPos1Y() &&
          pos.getPos2X() === visited[j].getPos2X() &&
          pos.getPos2Y() === visited[j].getPos2Y()
        ) {
          check = false;
          break;
        }
      }
      if (check) {
        q.push(pos);
        visited.push(pos);
      }
    }
  }

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
