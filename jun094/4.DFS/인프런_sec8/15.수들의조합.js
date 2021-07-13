//nCm
const solution = (n, m, arr) => {
    let answer = 0;
    let combiLists = [];
    let combi = Array.from({ length: m }, () => 0);

    const dfs = (L, s, sum) => {
        if (L === m) {
            combiLists.push(combi);

            if (sum % 6 === 0) answer++;
        } else {
            for (let i = s; i < n; i++) {
                combi[L] = arr[i];
                dfs(L + 1, i + 1, sum + arr[i]);
            }
        }
    };
    dfs(0, 0, 0);

    return answer;
};

solution(5, 3, [2, 4, 5, 8, 12]);
