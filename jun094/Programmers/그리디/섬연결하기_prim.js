const adjacencyMatrix = (costs, n) => {
    let adj = Array.from(Array(n), () => Array(n).fill(0)); // 모두 0으로 초기화
    const len = costs.length;

    for (let i = 0; i < len; i++) {
        adj[costs[i][0]][costs[i][1]] = costs[i][2];
        adj[costs[i][1]][costs[i][0]] = costs[i][2];
    }
    return adj;
};

const solution = (n, costs) => {
    let answer = 0;
    const adjM = adjacencyMatrix(costs, n); // 인접행렬

    let stack = [0]; //최소신장트리의 노드를 차례대로 쌓음

    while (stack.length !== n) {
        let min = 99999;
        let next_i = 0;
        let next_j = 0;

        for (let i = 0; i < stack.length; i++) {
            for (let j = 0; j < n; j++) {
                if (stack[i] !== j && adjM[stack[i]][j] >= 1) {
                    //최소 거리 발견시, min 변경 후 stack에 쌓기

                    if (min > adjM[stack[i]][j]) {
                        min = adjM[stack[i]][j];
                        next_i = stack[i];
                        next_j = j;
                    }
                }
            }
        }

        answer += adjM[next_i][next_j];

        adjM[next_i][next_j] = -1; //방문한 곳은 -1
        adjM[next_j][next_i] = -1;

        stack.push(next_j);
    }

    return answer;
};

let n = 4;
let costs = [
    [0, 0, 0],
    [0, 2, 2],
    [1, 2, 5],
    [1, 3, 1],
    [2, 3, 8],
];
solution(n, costs);
