const solution = (n) => {
    let dp = Array(10).fill(0);
    let operation = [2, 3, 5]; //나누기 할 연산작업들

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + 1;

        for (let j = 0; j < 3; j++) {
            if (i % operation[j] === 0) {
                dp[i] = Math.min(dp[i / operation[j]] + 1, dp[i]);
                //console.log(JSON.parse(JSON.stringify(dp)));
            }
        }
    }

    return dp[n];
};

solution(6);
