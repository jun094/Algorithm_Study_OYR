const solution = (m, arr) => {
    let answer = 0;
    const n = arr.length;
    let start = 0;
    let end = n - 1;

    arr.sort();

    console.log(arr);

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        console.log(start, mid, end);

        if (arr[mid] === m) {
            answer = mid + 1;
            break;
        } else if (arr[mid] < m) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return answer;
};

const m = 32;
const arr = [23, 87, 65, 12, 57, 32, 99, 81];

solution(m, arr);
