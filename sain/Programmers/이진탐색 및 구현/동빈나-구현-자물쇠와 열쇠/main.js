console.log("main.js");

function solution(key, lock) {
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

const { key, lock } = input;

console.log(solution(key, lock));
