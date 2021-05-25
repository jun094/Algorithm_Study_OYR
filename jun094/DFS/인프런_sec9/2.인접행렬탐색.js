const initInjectiveMatrix = (arr, n) => {
    let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));

    for (let [a, b] of arr) {
        graph[a][b] = 1; //방향 그래프이므로, [b,a]는 방문처리 안해줌
    }
    return graph;
};
const solution = (arr) => {
    let answer = 0;

    const n = arr[0][0];
    let graph = initInjectiveMatrix(arr.slice(1), n); //인접 행렬 정보
    let visited = Array(n + 1).fill(false); // 방문 여부 정보
    let path = [];

    const dfs = (v) => {
        if (v === n) {
            answer++;

            console.log('visited', visited);
            console.log('path', path);
        } else {
            for (let i = 1; i <= n; i++) {
                if (graph[v][i] === 1 && visited[i] === false) {
                    visited[i] = true;
                    path.push(i);
                    dfs(i);

                    //중요!!
                    //트리 구조에서 뒤로 빽할때는 다시 방문처리를 다시 false로 해줘야함
                    path.pop();
                    visited[i] = false;
                }
            }
        }
    };

    visited[1] = true;
    path.push(1);
    dfs(1);

    return answer;
};

const arr = [
    [5, 9],
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5],
];
solution(arr);
