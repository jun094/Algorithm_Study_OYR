console.log("main.js");

function solution(key, lock) {
  let answer = false;
  const lockSize = lock[0].length;
  const keySize = key[0].length;

  function rotate(arr) {
    const temp = Array.from(Array(keySize), () => new Array(keySize).fill(0));
    for (let i = 0; i < keySize; i++) {
      for (let j = 0; j < keySize; j++) {
        temp[i][j] = arr[keySize - 1 - j][i];
      }
    }
    for (let i = 0; i < keySize; i++) {
      for (let j = 0; j < keySize; j++) {
        arr[i][j] = temp[i][j];
      }
    }
  }

  function check(comp, lock) {
    let startI = lockSize - 1;
    for (let i = 0; i < lockSize; i++) {
      let startJ = lockSize - 1;
      for (let j = 0; j < lockSize; j++) {
        if (comp[startI][startJ] === lock[i][j]) return false;
        startJ++;
      }
      startI++;
    }
    return true;
  }

  // 키 대입
  // 회전
  for (let r = 0; r < 4; r++) {
    // 이동
    for (let i = 0; i < lockSize + keySize - 1; i++) {
      for (let j = 0; j < lockSize + keySize - 1; j++) {
        // 대입
        const area = Array.from(Array(lockSize + 2 * keySize - 2), () =>
          new Array(lockSize + 2 * keySize - 2).fill(0)
        );
        for (let a = 0; a < keySize; a++) {
          for (let b = 0; b < keySize; b++) {
            area[i + a][j + b] = key[a][b];
          }
        }
        if (check(area, lock)) {
          answer = true;
          break;
        }
      }
      if (answer) break;
    }
    if (answer) break;
    rotate(key);
  }
  return answer;
}

const input = {
  key: [
    [0, 0, 0],
    [1, 0, 0],
    [0, 1, 1],
  ],
  lock: [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
  ],
};

const input2 = {
  key: [
    [0, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 1],
    [0, 0, 0, 0],
  ],
  lock: [
    [1, 1, 1, 1],
    [1, 1, 0, 1],
    [1, 0, 1, 1],
    [1, 1, 1, 1],
  ],
};

const { key, lock } = input2;

console.log(solution(key, lock));

function solution2(key, lock) {
  let answer = false;
  const size = key[0].length;

  function rotate(arr) {
    const temp = Array.from(Array(size), () => new Array(size).fill(0));
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        temp[i][j] = arr[size - 1 - j][i];
      }
    }
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        arr[i][j] = temp[i][j];
      }
    }
  }

  function move(arr, dir) {
    switch (dir) {
      case 0:
        for (let i = 1; i < size; i++) {
          for (let j = 0; j < size; j++) {
            arr[i - 1][j] = arr[i][j];
            arr[i][j] = 0;
          }
        }
        break;
      case 1:
        for (let i = size - 1; i > 0; i--) {
          for (let j = 0; j < size; j++) {
            arr[i][j] = arr[i - 1][j];
            arr[i - 1][j] = 0;
          }
        }
        break;
      case 2:
        for (let j = 1; j < size; j++) {
          for (let i = 0; i < size; i++) {
            arr[i][j - 1] = arr[i][j];
            arr[i][j] = 0;
          }
        }
        break;
      case 3:
        for (let j = size - 1; j > 0; j--) {
          for (let i = 0; i < size; i++) {
            arr[i][j] = arr[i][j - 1];
            arr[i][j - 1] = 0;
          }
        }
        break;
      default:
        break;
    }
  }

  function check(comp, lock) {
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (comp[i][j] === lock[i][j]) return false;
      }
    }
    return true;
  }

  for (let i = 0; i < 3; i++) {
    if (answer) break;
    for (let j = 0; j < 4; j++) {
      if (answer) break;
      const cpKey = key.map((inner) => inner.slice());
      while (
        cpKey.reduce(
          (acc, inArr) => acc + inArr.reduce((acc2, val) => acc2 + val, 0),
          0
        )
      ) {
        if (check(cpKey, lock)) {
          answer = true;
          break;
        }
        for (let k = 0; k < 4; k++) {
          const cpcpKey = cpKey.map((inner) => inner.slice());
          move(cpcpKey, k);
          if (check(cpcpKey, lock)) {
            answer = true;
            break;
          }
        }
        move(cpKey, j);
      }
    }
    rotate(key);
  }

  return answer;
}
