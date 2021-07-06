const solution = (arr) => {
    let answer = 0;
    const n = arr.length;
    let dx = [-1, 0, 1, 0, -1, 1, 1, -1];
    let dy = [0, 1, 0, -1, 1, 1, -1, -1];

    const dfs = (x, y) => {
        arr[x][y] = 0; //방문처리

        for (let i = 0; i < 8; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];

            // padding 처리
            if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
                //미방분 & 섬인 곳
                if (arr[nx][ny] === 1) {
                    dfs(nx, ny);
                }
            }
        }
    };

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (arr[i][j] === 1) {
                dfs(i, j);
                answer++;
            }
        }
    }
    return answer;
};

const arr = [
    [1, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1, 0, 0],
];

solution(arr);
