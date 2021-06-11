const solution = (N, number) => {
    if (N === number) return 1;

    let dp = Array(9).fill([]); // n번째에 만들수 있는 수들의 조합들
    dp[1] = [N];

    let idx = 2;
    while (idx <= 8) {
        let str = '';

        //[step 1] 5, 55, 555, 5555 등 연속되는 수 제일 먼저 담아놓기
        for (let k = 0; k < idx; k++) {
            str += N;
        }
        if (str * 1 === number) return idx;
        dp[idx] = [str * 1];

        //[step 2] left 와 right 사칙연산 구해서 number있으면 return
        for (let k = 1; k < idx; k++) {
            let left = dp[k].slice();
            let right = dp[idx - k].slice();

            for (let i = 0, len = left.length; i < len; i++) {
                for (let j = 0, len = right.length; j < len; j++) {
                    //사친연산 진행
                    if (left[i] + right[j] === number) return idx;
                    else dp[idx].push(left[i] + right[j]);

                    if (left[i] - right[j] === number) return idx;
                    else if (left[i] - right[j] > 0) dp[idx].push(left[i] - right[j]);

                    if (left[i] * right[j] === number) return idx;
                    else dp[idx].push(left[i] * right[j]);

                    if (left[i] / right[j] === number) return idx;
                    else if (left[i] / right[j] > 0) dp[idx].push(Math.floor(left[i] / right[j]));

                    //방향 바꿔서 진행
                    if (right[j] - left[i] === number) return idx;
                    else if (right[j] - left[i] > 0) dp[idx].push(right[j] - left[i]);

                    if (right[j] / left[i] === number) return idx;
                    else if (right[j] / left[i] > 0) dp[idx].push(Math.floor(right[j] / left[i]));
                }
            }
        }

        console.log(JSON.parse(JSON.stringify(dp)));
        idx++;
    }

    return -1;
};
