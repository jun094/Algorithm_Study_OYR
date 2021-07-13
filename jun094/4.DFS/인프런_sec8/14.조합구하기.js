//nCm
const solution = (n, m) => {
    let combi = []; // 전체 수 조합 리스트
    let tmp = Array.from({ length: m }, () => 0); // 한개의 수 조합

    const dfs = (L, s) => {
        if (L === m) {
            combi.push(tmp.slice());
        } else {
            for (let i = s; i <= n; i++) {
                tmp[L] = i;
                dfs(L + 1, i + 1);
            }
        }
    };
    dfs(0, 1);

    return combi;
};
solution(4, 2);
