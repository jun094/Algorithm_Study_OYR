const solution = (arr, m) => {
    const n = arr.length;
    let tmp = [];
    let answer = [];
    let visited = Array(n).fill(false);

    const dfs = (level) => {
        if (level === m) {
            answer.push(tmp.slice());
            return;
        }

        for (let i = 0; i < n; i++) {
            //방문하지 않았으면
            if (visited[i] === false) {
                tmp.push(arr[i]);
                visited[i] = true;
                dfs(level + 1);

                //back !!
                tmp.pop();
                visited[i] = false;
            }
        }
    };
    dfs(0);

    return answer;
};

solution([3, 6, 9], 2);
