const initInjectiveGraph = (arr, n) => {
    let graph = Array.from(Array(n + 1), () => Array());

    for (let [a, b] of arr) {
        graph[a].push(b); //인접리스트 정보 저장
    }
    return graph;
};
const solution = (arr) => {
    let answer = 0;

    const n = arr[0][0];
    let graph = initInjectiveGraph(arr.slice(1), n); //인접 리스트 정보
    let visited = Array(n + 1).fill(false); // 방문 여부 정보
    let path = [];

    //console.log(graph);

    const dfs = (v) => {
        if (v === n) {
            answer++;

            console.log('visited', visited);
            console.log('path', path);
        } else {
            for (let i = 0; i < graph[v].length; i++) {
                let target = graph[v][i];

                if (visited[target] === false) {
                    visited[target] = true;
                    path.push(target);
                    dfs(target);

                    //중요!!
                    //트리 구조에서 뒤로 빽할때는 다시 방문처리를 다시 false로 해줘야함
                    path.pop();
                    visited[target] = false;
                }
            }
        }
    };

    visited[1] = true;
    path.push(1);
    dfs(1);

    return answer;

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
