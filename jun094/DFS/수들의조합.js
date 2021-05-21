const solution = (n, k, arr, m) => {
    let answer = 0;

    const dfs = (L, s, sum) => {
        if (L === k) {
            if (sum % m === 0) answer++;
        } else {
            for (let i = s; i < n; i++) {
                dfs(L + 1, i + 1, sum + arr[i]);
            }
        }
    };

    dfs(0, 0, 0);
    return answer;
};
