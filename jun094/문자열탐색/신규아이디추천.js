//https://programmers.co.kr/learn/courses/30/lessons/72410

String.prototype.replaceAll = function (from, to) {
    if (from instanceof RegExp)
        if (!from.flags.includes) throw new TypeError('replaceAll must be called with a global RegExp');
        else return this.replace(from, to);
    else return this.replace(new RegExp(from.replace(/[\\^$*+?.():=!|{},\[\]]/g, '\\$&'), 'g'), to);
};

const checkLastFullStop = (str) => {
    let idx = str.length - 1;

    while (idx >= 0) {
        if (str[idx] === '.') idx--;
        else return str.slice(0, idx + 1);
    }

    return ''; //모두 "." 인 경우
};
const solution = (new_id) => {
    const n = new_id.length;
    let answer = '';

    //1단계
    new_id = new_id.toLowerCase();

    //2단계
    let tmp = '';
    for (let s of new_id) {
        if (('a' <= s && 'z' >= s) || ('0' <= s && '9' >= s) || s === '-' || s === '_' || s === '.') {
            tmp += s;
        }
    }
    new_id = tmp.slice();

    //3단계
    new_id = new_id.replaceAll('..', '.');

    //4단계
    if (new_id[0] === '.') new_id = new_id.slice(1);
    if (new_id[new_id.length - 1] === '.') new_id = new_id.slice(0, new_id.length - 1);

    //5단계
    if (new_id === '') new_id = 'a';

    //6단계
    if (new_id.length >= 16) {
        new_id = new_id.slice(0, 15);

        if (new_id[new_id.length - 1] === '.') new_id = new_id.slice(0, new_id.length - 1);
    }

    //7단계
    if (new_id.length === 2) new_id += new_id[1];
    else if (new_id.length === 1) new_id = new_id[0] + new_id[0] + new_id[0];

    return new_id;
};

solution('...!@BaT#*..y.abcdefghijklm');
