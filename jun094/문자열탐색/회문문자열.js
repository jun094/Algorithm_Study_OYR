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

    arr = arr.map((i) => {
        if (i.charCodeAt() >= 97) return i.toUpperCase();
        else return i;
    });

    return palindromeCheck(arr);
};

let str = 'gooG';
solution(str);
