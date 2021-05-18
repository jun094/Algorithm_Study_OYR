console.log("main.js");

function solution(N, K, input) {
  let answer = null;
  const selected = new Set();

  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      for (let k = j + 1; k < N; k++) {
        const sum = input[i] + input[j] + input[k];
        selected.add(sum);
      }
    }
  }

  const sorted = Array.from(selected).sort((a, b) => b - a);
  answer = sorted[K - 1];
  return answer;
}

const N = 10;
const K = 3;
const input = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];

console.log(solution(N, K, input));
