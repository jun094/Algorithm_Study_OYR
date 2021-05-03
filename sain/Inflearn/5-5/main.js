console.log("main.js");

function solution(N, M, input) {
  let answer = 0;
  let sum = 0;
  const arrLen = input.length;

  for (let i = 0; i < arrLen; i++) {
    if (i < M) sum += input[i];
    else {
      sum += input[i] - input[i - M];
    }
    if (sum > answer) answer = sum;
  }
  return answer;
}

const M = 3;
const N = 10;
const input = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];

console.log(solution(N, M, input));
