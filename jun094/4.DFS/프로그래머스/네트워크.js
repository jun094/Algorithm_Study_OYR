// https://programmers.co.kr/learn/courses/30/lessons/43162

const solution = (n, computers) => {
    let answer = 0;
    let visited = Array(n).fill(false);

    const dfs = (v) => {
        visited[v] = true;

        for (let i = 0; i < n; i++) {
            if (v !== i && computers[v][i] === 1 && visited[i] === false) {
                dfs(i);
            }
        }
    };
    for (let i = 0; i < n; i++) {
        if (visited[i] === false) {
            answer++;
            dfs(i);
        }
    }

    return answer;
};

solution(3, [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
]);
