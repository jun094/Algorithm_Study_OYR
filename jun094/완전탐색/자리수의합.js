const solution = (arr) => {
    const len = arr.length;
    let max = -1;
    let answer = 0;

    for (let i = 0; i < len; i++) {
        let str = String(arr[i]);
        let n = str.length;
        let sum = 0;

        for (let j = 0; j < n; j++) {
            sum += str[j] * 1;
        }

        if (max <= sum) {
            max = sum;
            answer = str * 1;
        }
    }

    return answer;
};

let arr = [128, 460, 603, 40, 521, 137, 123];
solution(arr);
