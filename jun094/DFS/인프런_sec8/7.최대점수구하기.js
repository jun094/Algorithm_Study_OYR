const solution = (arr) => {
    const n = arr[0][0]; // n개 문제
    const m = arr[0][1]; // 제한시간 m
    let check = [];
    let max = -1;

    arr = arr.slice(1);

    const dfs = (idx) => {
        if (idx === n) {
            let score = 0;
            let time = 0;

            for (let i = 0; i < n; i++) {
                if (check[i][0] !== 0) {
                    score += check[i][0];
                    time += check[i][1];
                }
            }

            //걸린 시간이 제한시간(m) 이내라면,
            if (time <= m) {
                max = max < score ? score : max;
            }
            return;
        }

        check[idx] = [arr[idx][0], arr[idx][1]];
        dfs(idx + 1);

        check[idx] = [0, 0];
        dfs(idx + 1);
    };
    dfs(0);

    return max;
};

const arr = [
    [5, 20],
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4],
];

solution(arr);
