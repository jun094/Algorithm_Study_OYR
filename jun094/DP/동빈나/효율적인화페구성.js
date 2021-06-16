const solution = (m, money) => {
    let dp = Array(m + 1).fill(10001);
    const n = money.length;

    dp[0] = 0;
    for (let i = 0; i < n; i++) {
        for (let j = money[i]; j <= m; j++) {
            if (dp[j - money[i]] !== 10001) dp[j] = Math.min(dp[j], dp[j - money[i]] + 1);
        }
    }

    if (dp[m] === 10001) return -1;

    return dp[m];
};

solution(15, [2, 3]);
