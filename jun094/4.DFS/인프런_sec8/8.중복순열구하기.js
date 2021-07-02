const solution = (n, m) => {
    let answer = [];
    let tmp = [];

    const dfs = (level) => {
        if (level === m) {
            answer.push(tmp.slice());
            return;
        }

        for (let i = 1; i <= n; i++) {
            tmp.push(i);
            dfs(level + 1);

            tmp.pop();
        }
    };
    dfs(0);

    return answer;
};

solution(3, 2);
