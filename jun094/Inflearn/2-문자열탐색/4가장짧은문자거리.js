const solution = (s, t) => {
    const len = s.length;
    let answer = [];
    let cnt = 0;

    for (let i = 0; i < len; i++) {
        if (s[i] === t) {
            cnt = 0;
            answer.push(0);
        } else {
            cnt++;
            answer.push(cnt);
        }
    }

    cnt = 0;
    for (let j = len - 1; j >= 0; j--) {
        if (s[j] === t) {
            cnt = 0;
        } else {
            cnt++;
            answer[j] = cnt > answer[j] ? answer[j] : cnt;
        }
    }

    console.log(answer);
};

let s = 'teachermode';
let t = 'e';

solution(s, t);
