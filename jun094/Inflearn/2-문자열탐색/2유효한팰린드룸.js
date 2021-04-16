const palindromeCheck = (arr) => {
    const len = arr.length;

    if (len % 2 !== 0) return 'NO';
    else {
        for (let i = 0; i < len / 2; i++) {
            if (arr[i] !== arr[len - 1 - i]) return 'NO';
        }
    }

    return 'YES';
};

const solution = (str) => {
    let arr = str.split('');
    let len = arr.length;

    for (let i = 0; i < len; i++) {
        let code = arr[i].charCodeAt();

        // 대문자 체크
        if (code >= 65 && code <= 90) {
            arr[i] = arr[i].toLowerCase();
        }
        // 소문자는 그냥 리턴
        else if (code >= 97 && code <= 122) {
            arr[i] = arr[i];
        }
        //알파벳 이외 문자 삭제
        else {
            arr.splice(i, 1);
            i--;
            len -= 1;
        }
    }

    return palindromeCheck(arr);
};

let str = 'found7, time: study; Yduts; emit, 7Dnuof';

solution(str);
