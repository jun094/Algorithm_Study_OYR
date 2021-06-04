const solution = (arr, m) => {
    let answer = 0;
    const n = arr.length;
    let total = m;
    let dp = [];

    arr.sort((a, b) => b - a);

    for (let i = 0; i < n; i++) {
        let cnt = 0;

        while (cnt * arr[i] <= total) {
            cnt++;
        }
        cnt--;

        dp[i] = cnt;
        total -= cnt * arr[i];
    }

    for (let i = 0; i < n; i++) {
        answer += dp[i];
    }

    return answer;
};

solution([1, 2, 5], 18);
