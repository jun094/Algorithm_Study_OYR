const solution = (info) => {
    let answer = 0;
    let x = info[0].charCodeAt() - 96;
    let y = info[1] * 1;

    let dx = [-2, -2, -1, 1, 2, 2, 1, -1];
    let dy = [-1, 1, 2, 2, 1, -1, -2, -2];

    for (let i = 0; i < 8; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];

        if (nx >= 1 && nx <= 8 && ny >= 1 && ny <= 8) {
            answer++;
        }
    }

    return answer;
};

solution('c2');
