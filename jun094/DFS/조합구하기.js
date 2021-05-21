const solution = (n, m) => {
    let answer = [];
    let tmp = Array.from({ length: m }, () => 0);

    const makeCombi = (level, s) => {
        if (level === m) {
            answer.push(tmp.slice());
        } else {
            for (let i = s; i <= n; i++) {
                tmp[level] = i;
                DFS(level + 1, i + 1);
            }
        }
    };
    makeCombi(0, 1);

    return answer;
};

solution(4, 2);
