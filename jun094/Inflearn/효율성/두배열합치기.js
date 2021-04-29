const solution = (n, arr, m, arr2) => {
    let answer = arr.concat(arr2).sort((a, b) => a - b);

    return answer;
};

let n = 3;
let arr = [1, 3, 5];
let m = 5;
let arr2 = [2, 3, 6, 7, 9];

solution(n, arr, m, arr2);
