// 동전의 종류가 많거나(100개 이상), 거슬러 줄 금액이 크다면 (100,000)
// dfs 가지고는 안됨 !! -> 재귀로 풀 수가 없음
// dp로 해주어야함

const solution = (arr, m) => {
    const n = arr.length;
    let dp = Array(m + 1).fill(9999);

    dp[0] = 0;
    for (let i = 0; i < n; i++) {
        for (let j = arr[i]; j <= m; j++) {
            let tmp = dp[j - arr[i]] + 1;

            dp[j] = Math.min(tmp, dp[j]);
        }
        //console.log(dp);
    }

    return dp[m];
};

solution([1, 2, 5], 15);
