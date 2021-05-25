const solution = (p) => {
    //1번 조건
    if (p === '') return '';

    let answer = '';

    const checkCorrect = (str) => {
        let left = 0;
        let right = 0;

        if (str[0] === ')') return false;

        for (let i = 0, len = str.length; i < len; i++) {
            if (str[i] === '(') left++;
            else right++;

            if (left < right) return false;
        }

        return true;
    };
    const divideUV = (str) => {
        let left = 0;
        let right = 0;
        let tmp = '';

        for (let i = 0, len = str.length; i < len; i++) {
            if (str[i] === '(') left++;
            else right++;

            tmp += str[i];
            if (left !== 0 && right !== 0 && left === right) {
                return [tmp, str.slice(i + 1)];
            }
        }
    };

    let arr = divideUV(p);
    let u = arr[0];
    let v = arr[1];

    //3번 조건
    if (checkCorrect(u)) return u + solution(v);

    //4번 조건
    answer = '(';
    answer += solution(v);
    answer += ')';

    let del_u = u.substr(1, u.length - 2);
    let tmp = '';

    for (let i = 0, len = del_u.length; i < len; i++) {
        if (del_u[i] === '(') tmp += ')';
        else tmp += '(';
    }

    answer += tmp;

    return answer;
};

solution('()))((()');
