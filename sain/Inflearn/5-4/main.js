console.log("main.js");

function solution(N, M, input) {
  let answer = 0;
  let p1 = 0;
  let p2 = 0;
  let sum = 0;
  const arrLen = input.length;

  while (p1 < arrLen && p2 < arrLen) {
    if (sum === 0) {
      sum += input[p1];
      p2++;
      answer++;
    }
    const next = input[p2++];
    if (sum + next < M) {
      sum += next;
      answer++;
    } else {
      if (sum + next === M) answer++;
      sum = 0;
      p1++;
      p2 = p1;
    }
  }
  return answer;
}

const M = 5;
const N = 5;
const input = [1, 3, 1, 2, 3];

console.log(solution(N, M, input));
