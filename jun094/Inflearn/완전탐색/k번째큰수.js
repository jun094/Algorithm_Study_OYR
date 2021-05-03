const solution = (n, k, arr) => {
    let set = new Set();
    let answer = [];

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let m = j + 1; m < n; m++) {
                set.add(arr[i] + arr[j] + arr[m]);
            }
        }
    }

    answer = Array.from(set).sort((a, b) => b - a);

    return answer[k - 1];
};

let n = 10;
let k = 3;
let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
solution(n, k, arr);
