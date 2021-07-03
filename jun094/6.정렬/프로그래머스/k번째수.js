const solution = (array, commands) => {
    let answer = [];
    const n = commands.length;

    for (let i = 0; i < n; i++) {
        let tmp = array.slice(commands[i][0] - 1, commands[i][1]);
        tmp.sort((a, b) => a - b);

        answer.push(tmp[commands[i][2] - 1]);
    }

    return answer;
};

solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
        [2, 5, 3],
        [4, 4, 1],
        [1, 7, 3],
    ]
);
