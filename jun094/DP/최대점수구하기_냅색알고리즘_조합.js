const solution = (arr) => {
    const m = arr[0][1]; //제한시간
    const n = arr[0][0]; //문제 개수
    let problems = arr.slice(1); // 점수, 시간
    let dp = Array(m + 1).fill(0);

    for (let i = 0; i < n; i++) {
        let s = problems[i][0]; //점수 score
        let t = problems[i][1]; //시간 time

        for (let j = m; j >= t; j--) {
            dp[j] = Math.max(dp[j], s + dp[j - t]);
        }
    }

    return dp[m];
};

solution([
    [5, 20],
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4],
]);
