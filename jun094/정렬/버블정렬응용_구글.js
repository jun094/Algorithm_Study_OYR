const solution = (arr) => {
    const len = arr.length;
    let tmp = 0;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] >= 0 && arr[j + 1] < 0) {
                tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
};

const arr = [1, 2, 3, -3, -2, 5, 6, -6];

solution(arr);
