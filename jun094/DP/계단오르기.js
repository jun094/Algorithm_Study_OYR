const solution = (n) => {
    let answer = 0;
    let dp = Array(n + 1).fill(0);

    dp[1] = 1;
    dp[2] = 2;

    for (let i = 3; i < n + 1; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
};
