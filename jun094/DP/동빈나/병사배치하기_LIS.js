//https://youtu.be/5Lu34WIx2Us?t=3666
//최장감소수열 (https://www.youtube.com/watch?v=8OGlq6zKOl0&ab_channel=algorithmjobsalgorithmjobs)

const solution = (arr) => {
    const n = arr.length;
    let dp = Array(n).fill(1);

    //LDS 구하는거니깐 reverse !!!!!
    arr.reverse();

    //LIS 탐색 시작
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            console.log(arr[i], arr[j]);
            if (arr[i] > arr[j]) dp[i] = Math.max(dp[j] + 1, dp[i]);
        }

        console.log(JSON.parse(JSON.stringify(dp)));
    }

    return dp;
};

solution([2, 5, 9, 3, 6, 3, 8, 9, 1]);
