console.log("main.js");

function solution(input) {
  let answer = null;
  const n = input.length;
  const dp = new Array(n).fill(0);
  dp[0] = input[0];
  dp[1] = Math.max(input[0], input[1]);

  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + input[i]);
  }

  answer = dp[n - 1];

  return answer;
}

const input = [1, 3, 1, 5];

console.log(solution(input));
