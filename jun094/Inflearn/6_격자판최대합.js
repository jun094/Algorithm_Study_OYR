const solution = (arr) => {
    let sum = 0;
    let max = 0;
    let len = arr.length;

    let tmp1 = 0;
    let tmp2 = 0;

    //대각선 접근
    for (let i = 0; i < len; i++) {
        tmp1 += arr[i][i];
        tmp2 += arr[len - 1 - i][i];
    }
    max = tmp1 < tmp2 ? tmp2 : tmp1;

    //순차 접근
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            sum += arr[i][j];
        }

        if (max < sum) {
            max = sum;
        }
        sum = 0;
    }

    return max;
};

let arr = [
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
];

solution(arr);
