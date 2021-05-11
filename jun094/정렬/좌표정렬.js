const solution = (arr) => {
    return arr.sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0];
        else return a[1] - b[1];
    });
};

let arr = [
    [2, 7],
    [1, 3],
    [1, 2],
    [2, 5],
    [3, 6],
];
solution(arr);
