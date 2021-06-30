const solution = (n, m, arr) => {
    let answer = [];

    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < n; j++) {
            sum += arr[j];

            console.log(i, j, sum);
            if (sum <= m) {
                answer.push(arr.slice(i, j + 1));
            } else {
                break;
            }
        }
    }

    return answer.length;
};

const arr = [1, 3, 1, 2, 3];

solution(5, 5, arr);
