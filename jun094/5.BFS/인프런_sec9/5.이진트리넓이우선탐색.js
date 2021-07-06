const solution = (n) => {
    let q = [1];
    let answer = [];

    while (q.length !== 0) {
        let v = q.pop();

        answer.push(v); //방문

        if (v * 2 <= n) {
            q.unshift(v * 2);
        }
        if (v * 2 + 1 <= n) {
            q.unshift(v * 2 + 1);
        }
    }

    return answer;
};

solution(8);
