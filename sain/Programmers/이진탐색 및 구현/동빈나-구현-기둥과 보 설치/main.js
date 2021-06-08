console.log("main.js");

function solution(n, build_frame) {
  let answer = [];
  const frameSize = build_frame.length;
  const pillars = Array.from(Array(n + 1), () => new Array(n + 1).fill(false));
  const steps = Array.from(Array(n + 1), () => new Array(n + 1).fill(false));
  let cnt = 0;

  function checkInstallation(x, y, type, pillars, steps) {
    if (type === 0) {
      if (y === 0 || pillars[y - 1][x]) return true;
      if ((x > 0 && steps[y][x - 1]) || steps[y][x]) return true;
      return false;
    } else {
      if (x + 1 > n) return false;
      if (pillars[y - 1][x] || pillars[y - 1][x + 1]) return true;
      if (x > 0 && steps[y][x - 1] && steps[y][x + 1]) return true;
      return false;
    }
  }

  function checkUninstallation(x, y, type, pillars, steps) {
    for (let i = y; i <= y + 1; i++) {
      for (let j = Math.max(x - 1, 0); j <= x + 1; j++) {
        if (pillars[i][j] && !checkInstallation(j, i, 0, pillars, steps))
          return false;
        if (steps[i][j] && !checkInstallation(j, i, 1, pillars, steps))
          return false;
      }
    }
    return true;
  }

  function install(x, y, type, pillars, steps) {
    if (type === 0) pillars[y][x] = true;
    else steps[y][x] = true;
  }

  function uninstall(x, y, type, pillars, steps) {
    if (type === 0) pillars[y][x] = false;
    else steps[y][x] = false;
  }

  for (let i = 0; i < frameSize; i++) {
    const [x, y, type, action] = build_frame[i];
    switch (action) {
      case 0:
        uninstall(x, y, type, pillars, steps);
        if (!checkUninstallation(x, y, type, pillars, steps))
          install(x, y, type, pillars, steps);
        else cnt--;
        break;
      case 1:
        if (checkInstallation(x, y, type, pillars, steps)) {
          install(x, y, type, pillars, steps);
          cnt++;
        }
        break;
      default:
        // Nothing to do...
        break;
    }
  }

  answer = Array.from(Array(cnt), () => new Array(3));
  cnt = 0;

  for (let x = 0; x <= n; x++) {
    for (let y = 0; y <= n; y++) {
      if (pillars[y][x]) {
        answer[cnt][0] = x;
        answer[cnt][1] = y;
        answer[cnt++][2] = 0;
      }
      if (steps[y][x]) {
        answer[cnt][0] = x;
        answer[cnt][1] = y;
        answer[cnt++][2] = 1;
      }
    }
  }

  return answer;
}

const input1 = {
  n: 5,
  buildFrame: [
    [1, 0, 0, 1],
    [1, 1, 1, 1],
    [2, 1, 0, 1],
    [2, 2, 1, 1],
    [5, 0, 0, 1],
    [5, 1, 0, 1],
    [4, 2, 1, 1],
    [3, 2, 1, 1],
  ],
};
const input2 = {
  n: 5,
  buildFrame: [
    [0, 0, 0, 1],
    [2, 0, 0, 1],
    [4, 0, 0, 1],
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [2, 1, 1, 1],
    [3, 1, 1, 1],
    [2, 0, 0, 0],
    [1, 1, 1, 0],
    [2, 2, 0, 1],
  ],
};

const { n, buildFrame } = input2;

console.log(solution(n, buildFrame));

/////////////////////////////////////////////////////////////////////////////

function solution2(n, build_frame) {
  let answer = [];
  const frameSize = build_frame.length;
  const board = Array.from(Array(n + 1), () => new Array(n + 1).fill(null));

  function checkInstallation(x, y, type, action, board) {
    if (x < 0 || x > n || y < 0 || (type === 0 ? y > n : y >= n)) return false;
    switch (action) {
      case 0:
        // 기둥 삭제
        if (type === 0) {
          /** 기둥 삭제 조건: 삭제하려는 y값 바로 위에 기둥이 없는지 확인
           * 또는 보가 있다면, 보의 양 끝이 연결되어 있는지 확인
           */
          if (
            board[y + 1][x] === 0 ||
            (board[y + 1][x] === 1 &&
              !(board[y + 1][x + 1] === 1 && board[y + 1][x - 1] === 1))
          )
            return false;
          else return true;
        }
        // 보 삭제
        else {
          /** 보 삭제 조건: 삭제하려는 깂 바로 위에 기둥이 없는지 확인
           * 또는 보의 양 끝이 연결되어 있는지 확인
           */
          if (board[y][x + 1] === 0 || board[y][x] === 0) return false;
          else return true;
        }
      case 1:
        // 기둥 설치
        if (type === 0) {
          /** 기둥 설치 조건: 설치하려는 y값이 0번째인가 확인
           * 또는 설치하려는 y값 바로 아래에 기둥이나 보가 있는지 확인
           */
          if (
            y === 0 ||
            (y > 0 &&
              (board[y - 1][x] === 0 ||
                board[y][x - 1] === 1 ||
                board[y][x] === 1))
          )
            return true;
          else return false;
        }
        // 보 설치
        else {
          /** 보 설치 조건: 설치하려는 y값이 0번째가 아닌지 확인
           * 그리고 보의 좌측 또는 우측 끝 부분이 기둥 위에 있거나,
           * 양쪽 끝 단이 다른 보와 동시에 연결돼있는지 확인
           */
          if (
            y > 0 &&
            (board[y - 1][x] === 0 ||
              board[y - 1][x + 1] === 0 ||
              (board[y][x - 1] === 1 && board[y][x + 1] === 1))
          )
            return true;
          else return false;
        }
      default:
        return false;
    }
  }

  function installation(x, y, type, action, board) {
    switch (action) {
      case 0:
        board[y][x] = null;
        break;
      case 1:
        board[y][x] = type;
        break;
      default:
        break;
    }
  }

  for (let i = 0; i < frameSize; i++) {
    const [x, y, type, action] = build_frame[i];
    if (checkInstallation(x, y, type, action, board)) {
      installation(x, y, type, action, board);
    }
  }

  console.log(board);

  return answer;
}
