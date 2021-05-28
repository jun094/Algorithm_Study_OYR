const solution = (board) => {
    let queue = []; //선입선출 (unshift, pop)
    let object = [0, 0, 0, 1, 0]; //초기 위치 및 시간
    let visited = [];
    const len = board.length;

    //상,하,좌,우
    for (let i = 0; i < 4; i++) {
        visited.push(Array.from(Array(len), () => Array(len).fill(0)));
    }
    visited[1][0][0] = 1;
    visited[3][0][1] = 1;

    while (queue.length !== 0) {}
};
const board = [
    [0, 0, 0, 1, 1],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 1, 1],
    [1, 1, 0, 0, 1],
    [0, 0, 0, 0, 0],
];
solution(board);
