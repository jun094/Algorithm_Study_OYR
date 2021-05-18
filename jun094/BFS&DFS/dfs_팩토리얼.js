const solution = (n) => {
    let answer = 1;

    const dfs = (num) => {
        if (num === 1) return;

        answer *= num;
        dfs(num - 1);
    };

    dfs(n);

    return answer;
};

solution(5);
