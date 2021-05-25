const solution = (n, r) => {
    let answer = 0;
    let dp = Array.from(Array(n + 1), () => new Array(r + 1).fill(-1)); // 메모이제이션을 하기 위한 배열

    const combination = (n, r) => {
        if (n === r) return 1;
        else if (n !== 1 && r === 1) return n;
        else if (dp[n][r] !== -1) return dp[n][r];
        else {
            let tmp = combination(n - 1, r - 1) + combination(n - 1, r);
            dp[n][r] = tmp;

            return tmp;
        }
    };

    answer = combination(n, r);

    return answer;
};

solution(33, 19);
