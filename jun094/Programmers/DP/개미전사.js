//https://www.youtube.com/watch?v=5Lu34WIx2Us
//28:00

const Max = (a, b) => {
    return a > b ? a : b;
};
const solution = (n, arr) => {
    let dp = [arr[0], Max(arr[0], arr[1])];

    //점화식 : dp[i] = MAX ( dp[i-1] , dp[i-2]+ arr[i] )

    for (let i = 2; i < n; i++) {
        dp[i] = Max(dp[i - 1], dp[i - 2] + arr[i]);
    }

    console.log(dp);
    return dp[n - 1];
};

let n = 6;
let arr = [1, 3, 1, 5, 5, 4];

solution(n, arr);
