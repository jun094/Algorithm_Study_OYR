//dfs 탐색 후에 그래프 개수 구하면 됨 !

const solution = (n, computers) => {
    let answer = 0;
    const len = n;
    let adj = computers; //인접 행렬 (방문체크 까지)
    let visited = new Array(len).fill(false);

    const dfs = (idx) => {
        visited[idx] = true;

        for (let j = 0; j < len; j++) {
            if (idx !== j && adj[idx][j] === 1) {
                console.log(idx, j);
                adj[idx][j] = -1; //방문 노드는 -1
                adj[j][idx] = -1; //방문 노드는 -1

                dfs(j);
            }
        }
    };

    for (let idx = 0; idx < len; idx++) {
        if (visited[idx] === false) {
            answer++;
            dfs(idx);
        }
    }

    return answer;
};

// let computers = [
//     [1, 1, 0],
//     [1, 1, 0],
//     [0, 0, 1],
// ];

// let n = 3;

let computers = [
    [1, 1, 1, 0],
    [1, 1, 0, 0],
    [1, 0, 1, 1],
    [0, 0, 1, 1],
];

let n = 4;

solution(n, computers);
