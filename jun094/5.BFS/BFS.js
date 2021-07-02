const solution = (graph) => {
    const n = graph.length;
    let answer = []; //방문 경로
    let visited = Array(n + 1).fill(false);
    let q = [];

    //좌 삽입
    q.unshift(1);
    answer.push(1);
    visited[1] = true;

    //bfs
    while (q.length !== 0) {
        let v = q.pop(); //우 추출

        for (let i = 0, len = graph[v].length; i < len; i++) {
            let target = graph[v][i];

            if (visited[target] === false) {
                visited[target] = true; //방문
                answer.push(target); //방문경로
                q.unshift(target); //좌삽입
            }
        }
    }

    return answer;
};
solution([[], [2, 3, 8], [1, 7], [1, 4, 5], [3, 5], [3, 4], [7], [2, 6, 8], [1, 7]]);
