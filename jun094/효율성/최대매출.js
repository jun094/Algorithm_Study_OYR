//투포인터
const solution = (arr, k) => {
    const n = arr.length;
    let max = -1;

    for (let i = 0; i < n - 2; i++) {
        let sum = 0;
        for (let j = 0; j < k; j++) {
            sum += arr[i + j];
        }

        max = max < sum ? sum : max;
    }

    return max;
};

const arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
const k = 3;

solution(arr, k);
