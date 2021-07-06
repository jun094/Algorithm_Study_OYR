//https://youtu.be/2zjoKjt97vQ?t=2126

const solution = (n, route) => {
    let x = 1;
    let y = 1;

    for (let r of route) {
        let nx = x;
        let ny = y;

        if (r === 'R') {
            nx += 0;
            ny += 1;
        } else if (r === 'L') {
            nx += 0;
            ny -= 1;
        } else if (r === 'U') {
            nx -= 1;
            ny += 0;
        } else {
            nx += 1;
            ny += 0;
        }

        //공간 밖에 벗어나면 무시
        if (nx >= 1 && nx <= n && ny >= 1 && ny <= n) {
            x = nx;
            y = ny;
        }
    }

    return [x, y];
};

solution(5, ['R', 'R', 'R', 'U', 'D', 'D']);
