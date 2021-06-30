const solution = (arr, m) => {
    let answer = [];
    let n = arr.length;
    let visited = Array(n).fill(false);
    let permutation = Array(m).fill(0);

    const dfs = (level) => {
        if (level === m) {
            let str = '';
            for (let i = 0; i < m; i++) {
                str += permutation[i];
            }

            answer.push(str);

            return;
        }

        for (let i = 0; i < n; i++) {
            if (visited[i] === false) {
                visited[i] = true;
                permutation[level] = arr[i];
                dfs(level + 1);

                //중요 !!!!
                visited[i] = false;
            }
        }
    };
    dfs(0);

    console.log(visited);
    return answer;
};

solution([3, 6, 9], 2);
