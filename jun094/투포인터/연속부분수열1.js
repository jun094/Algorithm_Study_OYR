const solution = (n, m, arr) => {
    let answer = [];

    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < n; j++) {
            sum += arr[j];

            console.log(i, j, sum);

            if (sum === m) {
                answer.push(arr.slice(i, j + 1));
                break;
            } else if (sum < m) {
                continue;
            } else {
                break;
            }
        }
    }

    return answer;
};
let arr = [1, 2, 1, 3, 1, 1, 1, 2];

solution(8, 6, arr);
