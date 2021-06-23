console.log("main.js");

function solution(input) {
  let answer = null;
  const n = input.length;
  const dp = new Array(n).fill(1);
  input.reverse();

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (input[j] < input[i]) dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }

  console.log(dp);

  return n - Math.max(...dp);
}

const input = [15, 11, 4, 8, 5, 2, 4];

console.log(solution(input));
