const solution = (arr, n, m) => {
    let answer = [];
    for (let s1 = 1; s1 <= n; s1++) {
        for (let s2 = 1; s2 <= n; s2++) {
            if (s1 !== s2) {
                let flag = true; //최종적으로 true여야 push
                for (let i = 0; i < m; i++) {
                    let idx_s1 = (idx_s2 = 0);

                    for (let j = 0; j < n; j++) {
                        if (arr[i][j] === s1) idx_s1 = j;
                        else if (arr[i][j] === s2) idx_s2 = j;
                    }
                    if (idx_s1 >= idx_s2) {
                        //console.log(idx_s1, idx_s2);
                        flag = false;
                        i = m; //만나는 순간 탈출
                    }
                }

                if (flag) {
                    answer.push([s1, s2]);
                }
            }
        }
    }

    return answer;
};
let arr = [
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
];
solution(arr, 4, 3);
