const solution = (arr, cnt) => {
    let answer = 0;
    const n = arr.length;

    let lt = Math.max(...arr);
    let rt = arr.reduce((a, b) => a + b, 0);

    while (lt <= rt) {
        let tmp = [];
        let mid = Math.floor((lt + rt) / 2);

        let sum = 0;
        for (let i = 0; i < n; i++) {
            if (arr[i] + sum <= mid) {
                sum += arr[i];
            } else {
                tmp.push(sum);

                sum = arr[i];
            }
        }
        tmp.push(sum);

        if (tmp.length <= cnt) {
            //dvd 제조 가능
            answer = mid;
            rt = mid - 1;
        } else {
            lt = mid + 1;
        }
    }

    return answer;
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let cnt = 3;
solution(arr, cnt);
