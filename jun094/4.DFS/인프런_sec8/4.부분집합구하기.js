const solution = (num) => {
    let answer = [];
    let check = Array(num + 1).fill(0);

    const dfs = (n) => {
        if (n === num + 1) {
            let tmp = '';

            for (let i = 1; i <= num; i++) {
                if (check[i] === 1) tmp += i;
            }

            answer.push(tmp);
            return;
        }

        check[n] = 1;
        dfs(n + 1);

        check[n] = 0;
        dfs(n + 1);
    };

    dfs(1);

    return answer;
};

solution(3);
