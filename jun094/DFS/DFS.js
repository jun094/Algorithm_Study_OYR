const solution = (graph) => {
    let answer = []; // 방문순서
    const n = graph.length;
    let visited = Array(n).fill(false);

    const dfs = (v) => {
        visited[v] = true;
        answer.push(v); // 방문 순서 담음

        for (let i = 0, len = graph[v].length; i < len; i++) {
            let target = graph[v][i];

            if (visited[target] === false) {
                dfs(target);
            }
        }
    };

    dfs(1);

    console.log(visited);
    return answer;
};

solution([[], [2, 3, 8], [1, 7], [1, 4, 5], [3, 5], [3, 4], [7], [2, 6, 8], [1, 7]]);
//1 2 7 6 8 3 4 5
