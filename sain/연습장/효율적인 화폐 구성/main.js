console.log("main.js");

function solution(n, m, s) {
  let answer = null;
  const dp = new Array(m + 1).fill(10001);

  dp[0] = 0;

  for (let i = 0; i < n; i++) {
    for (let j = s[i]; j <= m; j++) {
      if (dp[j - s[i]] !== 10001) dp[j] = Math.min(dp[j], dp[j - s[i]] + 1);
    }
  }

  if (dp[m] === 10001) return -1;
  else return dp[m];
}

const input = {
  n: 2,
  m: 15,
  s: [2, 3],
};

const { n, m, s } = input;

console.log(solution(n, m, s));
