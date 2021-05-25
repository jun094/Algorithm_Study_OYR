const solution = (arr, m) => {
    let answer = [];
    let n = arr.length;
    let check = Array(n).fill(0);
    let permutation = Array(m).fill(0);

    const dfs = (level) => {
        if (level === m) {
            let str = '';
            for (let i = 0; i < m; i++) {
                str += permutation[i];
            }

            answer.push(str);

            return;
        }

        for (let i = 0; i < n; i++) {
            if (check[i] === 0) {
                check[i] = arr[i];
                permutation[level] = arr[i];
                dfs(level + 1);

                //중요 !!!!
                check[i] = 0;
            }
        }
    };
    dfs(0);

    return answer;
};

solution([3, 6, 9], 2);
