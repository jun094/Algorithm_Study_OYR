const checkDecimal = (num) => {
    if (num === 1) return false;
    if (num === 2) return true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }

    return true;
};

const solution = (arr) => {
    const len = arr.length;
    let answer = [];

    for (let i = 0; i < len; i++) {
        let str = String(arr[i]);
        let n = str.length;
        let num = '';

        for (let j = n - 1; j >= 0; j--) {
            num += str[j];
        }

        if (checkDecimal(num * 1)) {
            answer.push(num * 1);
        }
    }
    return answer;
};

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
solution(arr);
