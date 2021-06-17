//https://youtu.be/5Lu34WIx2Us?t=3166

const solution = ([n, m], arr) => {
    let answer = -1;
    let dp = [];

    //방향벡터 설정 (좌상단,좌,좌하단)
    let dx = [-1, 0, 1];
    let dy = [-1, -1, -1];

    //금공 2차원 배열로 변경
    for (let i = 0; i < n; i++) {
        let tmp = [];
        for (let j = 0; j < m; j++) {
            tmp.push(arr[i * m + j]);
        }
        dp.push(tmp);
    }

    //dp 탐색 시작 -> 1열부터 세로방향으로 탐색
    for (let y = 1; y < m; y++) {
        for (let x = 0; x < n; x++) {
            let max = -1;

            //방향벡터 순으로 탐색
            for (let k = 0; k < 3; k++) {
                //console.log(x + dx[k], y + dy[k]);
                //3방향 중 가장 큰값 찾음
                if (x + dx[k] >= 0 && x + dx[k] < n) {
                    max = Math.max(max, dp[x + dx[k]][y + dy[k]]);
                }
            }
            //console.log(x, y, max, dp[x][y]);

            // 가장 큰값이랑 자기 자신이랑 더함
            dp[x][y] = dp[x][y] + max;
            //console.log(JSON.parse(JSON.stringify(dp)));
        }
    }

    for (let i = 0; i < n; i++) {
        answer = Math.max(answer, dp[i][m - 1]);
    }
    return answer;
};

//solution([3, 4], [1, 3, 3, 2, 2, 1, 4, 1, 0, 6, 4, 7]);
solution([4, 4], [1, 3, 1, 5, 2, 2, 4, 1, 5, 0, 2, 3, 0, 6, 1, 2]);
