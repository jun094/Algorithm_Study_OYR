const solution = (s, e) => {
    let visited = Array(10001).fill(false);
    let dp = Array(10001).fill(0);
    let q = [s];

    visited[s] = true;
    dp[s] = 0;

    while (q.length !== 0) {
        let v = q.pop();

        //console.log(v);
        for (let i of [v - 1, v + 1, v + 5]) {
            if (i === e) {
                return dp[v] + 1;
            } else if (i >= 1 && i <= 10000 && visited[i] === false) {
                visited[i] = true;
                dp[i] = dp[v] + 1;

                q.unshift(i);
            }
        }
    }
};

solution(5, 14);
