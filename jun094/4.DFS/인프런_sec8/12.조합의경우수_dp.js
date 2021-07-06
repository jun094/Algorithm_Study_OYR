const solution = (N, R) => {
    let dp = Array.from(Array(N + 1), () => Array(R + 1).fill(0));

    const dfs = (n, r) => {
        if (dp[n][r] !== 0) return dp[n][r];
        if (n === r) return 1;
        if (r === 1) return n;

        let sum = dfs(n - 1, r - 1) + dfs(n - 1, r);
        dp[n][r] = sum;
        return sum;
    };

    return dfs(N, R);
};

solution(33, 19);
