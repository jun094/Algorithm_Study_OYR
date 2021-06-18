console.log("main.js");

function solution(input) {
  let answer = null;
  const dp = new Array(input + 1).fill(0);

  for (let i = 2; i < input + 1; i++) {
    dp[i] = dp[i - 1] + 1;
    if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[Math.floor(i / 2)] + 1);
    if (i % 3 === 0) dp[i] = Math.min(dp[i], dp[Math.floor(i / 3)] + 1);
    if (i % 5 === 0) dp[i] = Math.min(dp[i], dp[Math.floor(i / 5)] + 1);
  }

  answer = dp[input];

  return answer;
}

const input = 26;

console.log(solution(input));
