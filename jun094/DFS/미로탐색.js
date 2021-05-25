const solution = (arr) => {
    let answer = 0;
    const n = arr.length;
    let graph = arr.slice();
    let path = [];

    //방향 백터 설정
    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];

    const dfs = (x, y) => {
        if (x === n - 1 && y === n - 1) {
            console.log(JSON.stringify(path));
            answer++;
        } else {
            for (let i = 0; i < 4; i++) {
                let nx = x + dx[i];
                let ny = y + dy[i];

                if (nx >= 0 && nx <= n - 1 && ny >= 0 && ny <= n - 1 && graph[nx][ny] === 0) {
                    graph[nx][ny] = 1; //방문 처리
                    path.push([nx, ny]);
                    //console.log(path);
                    dfs(nx, ny);

                    //중요 !!
                    //뒤로 back할때는 미방문으로 바꿔줌
                    path.pop();
                    graph[nx][ny] = 0;
                }
            }
        }
    };

    path.push([0, 0]);
    graph[0][0] = 1; // 출발지는 미리 방문
    dfs(0, 0);

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
