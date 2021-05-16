const solution = (c, arr) => {
    const len = arr.length;
    let check = Array(len).fill(0);
    let max = -1;

    const dfs = (idx) => {
        if (idx === len) {
            let sum = 0;

            for (let i = 0; i < len; i++) {
                if (check[i] !== 0) {
                    sum += check[i];
                }
            }

            if (sum <= c) {
                max = max < sum ? sum : max;
            }

            return;
        }

        check[idx] = arr[idx];
        dfs(idx + 1);

        check[idx] = 0;
        dfs(idx + 1);
    };

    dfs(0);

    return max;
};

solution(259, [81, 58, 42, 33, 61]);
