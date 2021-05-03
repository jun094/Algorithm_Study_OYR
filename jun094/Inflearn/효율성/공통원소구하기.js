const solution = (arr, arr2) => {
    let answer = [];
    const n = arr.length;
    const m = arr2.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (arr[i] === arr2[j]) {
                answer.push(arr2[j]);
            }
        }
    }

    return answer.sort((a, b) => a - b);
};

const arr = [1, 3, 9, 5, 2];
const arr2 = [3, 2, 5, 7, 8];

solution(arr, arr2);
