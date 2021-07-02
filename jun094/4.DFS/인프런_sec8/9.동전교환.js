const solution = (arr, m) => {
    const n = arr.length;
    let sum = 0;
    let answer = 9999;

    const dfs = (level) => {
        if (sum === m) {
            answer = Math.min(answer, level);
            return;
        } else if (sum > m) return;
        else {
            for (let i = 0; i < n; i++) {
                sum += arr[i];
                dfs(level + 1);

                sum -= arr[i];
            }
        }
    };
    dfs(0);

    return answer;
};
solution([1, 2, 5], 15);
