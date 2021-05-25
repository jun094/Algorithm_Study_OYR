const solution = (arr) => {
    const n = arr.length;
    let graph = arr.slice();
    let answer = 0;
    let q = []; //초기 위치 설정

    //방향 벡터 설정
    let dx = [-1, -1, -1, 0, 1, 1, 1, 0];
    let dy = [-1, 0, 1, 1, 1, 0, -1, -1];

    let tmp = [];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            //섬을 만나면
            if (graph[i][j] === 1) {
                graph[i][j] = 0; //방문처리 후,
                q.unshift([i, j]); // 큐에 삽입

                answer++;
                //bfs start !!
                while (q.length !== 0) {
                    let v = q.pop();

                    for (let k = 0; k < 8; k++) {
                        let nx = v[0] + dx[k];
                        let ny = v[1] + dy[k];

                        //같은 섬을 만났을 때, 큐 삽입
                        if (nx > -1 && ny > -1 && nx < n && ny < n) {
                            if (graph[nx][ny] === 1) {
                                graph[nx][ny] = 0; //방문 처리후,
                                q.unshift([nx, ny]); // 큐에 삽입
                            }
                        }
                    }
                }
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
