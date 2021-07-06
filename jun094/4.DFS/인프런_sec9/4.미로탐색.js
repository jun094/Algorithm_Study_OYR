const solution = (arr) => {
    let answer = 0;
    const n = arr.length;
    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];
    let route = []; // 경로를 담을 배열
    let tmp = [];

    const dfs = (x, y) => {
        //도착점 도착
        if (x === n - 1 && y === n - 1) {
            route.push(tmp.slice());
            answer++;
        } else {
            //4가지 방향 탐색
            for (let i = 0; i < 4; i++) {
                let nx = x + dx[i];
                let ny = y + dy[i];

                //padding 영역이 아닐때만 탐색
                if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
                    //벽(1)이 아닐때만 탐색
                    if (arr[nx][ny] === 0) {
                        //경로 담음
                        tmp.push([nx, ny]);

                        //방문처리
                        arr[nx][ny] = 1;

                        //다음 방문
                        dfs(nx, ny);

                        //back !
                        arr[nx][ny] = 0;
                        tmp.pop();
                    }
                }
            }
        }
    };
    arr[0][0] = 1;
    dfs(0, 0);

    console.log(route);
    return answer;
};

const arr = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [1, 1, 0, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0],
];

solution(arr);
