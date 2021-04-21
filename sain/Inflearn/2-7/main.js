console.log("main.js");

function solution(array) {
  let answer = 0;
  const arrLen = array.length;
  for (let i = 0; i < arrLen; i++) {
    for (let j = 0; j < arrLen; j++) {
      const left = j - 1 < 0 ? 0 : array[i][j - 1];
      const right = j + 1 >= arrLen ? 0 : array[i][j + 1];
      const up = i - 1 < 0 ? 0 : array[i - 1][j];
      const down = i + 1 >= arrLen ? 0 : array[i + 1][j];
      const current = array[i][j];
      if (current > up && current > down && current > left && current > right) {
        answer++;
      }
    }
  }
  return answer;
}

const array = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];

console.log(solution(array));
