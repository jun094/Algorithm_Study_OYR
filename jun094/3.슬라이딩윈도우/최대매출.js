const solution = (arr, k) => {
    let answer = 0;
    const n = arr.length;
    let window_sum = 0; // k개의 윈도우의 총 합

    for (let i = 0; i < k; i++) {
        window_sum += arr[i];
    }
    answer = window_sum;

    // sliding 처리
    for (let i = k; i < n; i++) {
        window_sum -= arr[i - k];
        window_sum += arr[i];

        answer = Math.max(answer, window_sum);
    }

    return answer;
};

const arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
const k = 3;

solution(arr, k);
