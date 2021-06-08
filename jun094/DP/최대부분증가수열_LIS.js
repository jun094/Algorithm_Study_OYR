const solution = (arr) => {
    const n = arr.length;
    let dp = Array(n).fill(0);

    dp[0] = 1;

    for (let i = 1; i < n; i++) {
        let max = -1;

        for (let j = i - 1; j >= 0; j--) {
            if (arr[i] > arr[j]) {
                if (max < dp[j]) {
                    max = dp[j];
                }
            }
        }
        dp[i] = max === -1 ? 1 : max + 1;

        //console.log(JSON.stringify(dp));
    }

    return Math.max(...dp);
};

solution([5, 3, 7, 8, 6, 2, 9, 4]);
