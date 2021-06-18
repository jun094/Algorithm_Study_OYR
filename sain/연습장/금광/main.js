console.log("main.js");

function solution(n, m, golds) {
  const dp = new Array(m + 1).fill(0);

  for (let i = 0; i < m; i++) {
    let currentMax = 0;
    for (let j = 0; j < n; j++)
      if (currentMax < golds[j * m + i]) currentMax = golds[j * m + i];
    console.log(currentMax);
    dp[i + 1] = Math.max(dp[i] + currentMax);
  }

  console.log(dp);

  return dp[m];
}

const input1 = {
  n: 3,
  m: 4,
  golds: [1, 3, 3, 2, 2, 1, 4, 1, 0, 6, 4, 7],
};

const input2 = {
  n: 4,
  m: 4,
  golds: [1, 3, 1, 5, 2, 2, 4, 1, 5, 0, 2, 3, 0, 6, 1, 2],
};
/*
[1, 3, 1, 5,
[2, 2, 4, 1,
[5, 0, 2, 3,
[0, 6, 1, 2]
*/

const { n, m, golds } = input1;

console.log(solution(n, m, golds));
