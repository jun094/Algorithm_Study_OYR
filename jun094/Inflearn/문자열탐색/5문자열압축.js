const solution = (str) => {
    let answer = '';
    const len = str.length;
    let temp = str[0];
    let cnt = 1;

    for (let i = 1; i < len; i++) {
        if (temp === str[i]) {
            cnt++;
        } else {
            answer = answer + str[i - 1] + (cnt > 1 ? cnt : '');
            temp = str[i];
            cnt = 1;
        }
    }
    answer = answer + temp + (cnt > 1 ? cnt : '');
    return answer;
};

let str = 'KKHSSSSSSSEE';
solution(str);
