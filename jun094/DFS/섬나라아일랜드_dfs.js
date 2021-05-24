const solution = (arr) => {
    const n = arr.length;
    let graph = arr.slice();
    let answer = 0;

    const dfs = (x, y) => {
        if (x <= -1 || x >= n || y <= -1 || y >= n) {
            return false;
        }

        if (graph[x][y] === 1) {
            graph[x][y] = 0; // 방문 처리

            //상,하,좌,우 위치들 dfs 수행
            dfs(x, y - 1);
            dfs(x, y + 1);
            dfs(x - 1, y);
            dfs(x + 1, y);

            return true;
        }

        return false;
    };

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (dfs(i, j) === true) {
                answer += 1;
            }
        }
    }

    console.log(graph);
    return answer;
};

const arr = [
    [1, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 1, 0, 0],
];

solution(arr);
