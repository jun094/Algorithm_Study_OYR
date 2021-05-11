const solution = (arr) => {
    let answer = [];
    const len = arr.length;
    let visited = Array(len + 1).fill(false);

    const dfs = (arr, v, visited) => {
        visited[v] = true;
        answer.push(v);

        console.log(answer);

        for (let j = 0; j < arr[v].length; j++) {
            if (visited[arr[v][j]] === false) {
                dfs(arr, arr[v][j], visited);
            }
        }
    };

    dfs(arr, 1, visited);

    return answer;
};

let arr = [[], [2, 3, 8], [1, 7], [1, 4, 5], [3, 5], [3, 4], [7], [2, 6, 8], [1, 7]];

solution(arr);

//1 2 7 6 8 3 4 5
