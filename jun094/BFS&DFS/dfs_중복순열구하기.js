const solution = (arr) => {
    const n = arr[0]; //최대수
    const m = arr[1]; //중복 개수
    let answer = [];
    let permutation = Array(m).fill(0);

    const dfs = (idx) => {
        if (idx === m) {
            answer.push(permutation.slice());
            return;
        }

        for (let i = 0; i < n; i++) {
            permutation[idx] = i + 1;
            dfs(idx + 1);
        }
    };

    dfs(0);

    answer.push(answer.length);
    return answer;
};

const arr = [4, 3];

solution(arr);
