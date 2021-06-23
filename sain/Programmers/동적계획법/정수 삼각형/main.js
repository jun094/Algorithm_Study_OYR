console.log("main.js");
//
function solution(input) {
  const n = input.length;
  for (let i = 1; i < n; i++) {
    const hLen = input[i].length;
    for (let j = 0; j < hLen; j++) {
      if (j === 0) {
        input[i][j] += input[i - 1][0];
      } else if (j === hLen - 1) {
        input[i][j] += input[i - 1][hLen - 2];
      } else {
        input[i][j] += Math.max(input[i - 1][j - 1], input[i - 1][j]);
      }
    }
  }

  return Math.max(...input[n - 1]);
}

const input = [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]];

console.log(solution(input));
