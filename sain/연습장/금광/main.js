console.log("main.js");

function solution(n, m, golds) {
  const dp = [];
  for (let i = 0; i < n; i++) {
    dp.push(golds.slice(i * m, (i + 1) * m));
  }

  for (let i = 1; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const current = dp[j][i];
      const froms = [];
      if (j - 1 >= 0) froms.push(current + dp[j - 1][i - 1]);
      froms.push(current + dp[j][i - 1]);
      if (j + 1 < n) froms.push(current + dp[j + 1][i - 1]);
      const max = Math.max(...froms);
      dp[j][i] = max;
    }
  }

  let answer = 0;
  for (let i = 0; i < n; i++) {
    if (answer < dp[i][m - 1]) answer = dp[i][m - 1];
  }

  return answer;
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

const input3 = {
  n: 5,
  m: 3,
  golds: [1, 2, 3, 6, 3, 7, 3, 6, 2, 4, 9, 9, 8, 6, 3],
};
/*
[1, 3, 1, 5,
[2, 2, 4, 1,
[5, 0, 2, 3,
[0, 6, 1, 2]
*/

const { n, m, golds } = input2;

console.log(solution(n, m, golds));
