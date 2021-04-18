const findMaxNum = (array, delNum) => {
    const length = array.length;
    const digit = length - delNum;
    let max = array[0];
    let idx = 0;

    for (let i = 1; i < digit; i++) {
        if (max < array[i]) {
            max = array[i];
            idx = i;
        }
    }

    return [max, idx + 1];
};

const solution = (number, k) => {
    const arr = number.split('');
    const len = arr.length;
    const digit = len - k; //자릿수
    let answer = '';
    let idx = 0;

    for (let i = 0; i < digit; i++) {
        let tmp = findMaxNum(arr.slice(idx), k - i);

        console.log(tmp);
        answer += tmp[0];
        idx = tmp[1];
    }
    console.log(answer);
};

let number = '94';
solution(number, 2);
