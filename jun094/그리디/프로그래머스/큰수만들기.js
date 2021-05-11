const findMaxNum = (str, findIndex) => {
    let max = -1;
    let max_idx = 0;

    for (let i = 0; i <= findIndex; i++) {
        if (str[i] === '9') {
            return [str[i], i + 1];
        } else if (max < str[i]) {
            max = str[i];
            max_idx = i; // 최댓값 index 다음부터 탐색 시작!
        }
    }

    return [max, max_idx + 1];
};

const solution = (number, k) => {
    let answer = '';

    let arr = number.split('');
    const len = number.length - k; // 출력 문자열 길이

    let digit = len;
    let findIndex = 0;
    let idx = 0; // 최댓값 index 찾은 후, 다음 index 부터 탐색하기 위한 변수
    let tmp = []; // 최댓값 index 찾은 후, 다음 배열을 담을 변수;
    let i = 0;

    while (i < len) {
        if (idx !== 0) {
            number = number.substring(idx);
        }

        let length = number.length;

        if (digit === length) {
            answer += number;
            break;
        }

        findIndex = length - digit;
        tmp = findMaxNum(number, findIndex);

        answer += tmp[0];
        idx = tmp[1];

        digit--;
        i++;
    }
    //console.log(answer);
    return answer;
};

let number = '1924';
solution(number, 2);
