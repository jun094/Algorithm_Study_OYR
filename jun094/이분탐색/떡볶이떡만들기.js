const solution = (m, arr) => {
    const n = arr.length;
    let answer = 0;
    let lt = 0;
    let rt = Math.max(...arr);

    const checkSum = (h) => {
        let sum = 0;
        for (let i = 0; i < n; i++) {
            if (arr[i] > h) {
                sum += arr[i] - h;
            }
        }

        return sum;
    };

    while (lt <= rt) {
        let mid = Math.floor((lt + rt) / 2);
        let sum = checkSum(mid);

        if (sum >= m) {
            answer = mid;
            lt = mid + 1;
        } else {
            rt = mid - 1;
        }
    }

    return answer;
};

const m = 6;
const arr = [19, 10, 15, 17];

solution(m, arr);
