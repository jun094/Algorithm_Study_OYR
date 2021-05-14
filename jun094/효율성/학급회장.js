//해쉬
//자료구조 Map

const solution = (str) => {
    let map = new Map();
    let max = -1;
    let answer = '';
    const len = str.length;

    for (let i = 0; i < len; i++) {
        let key = str[i];
        let value = map.get(str[i]);

        if (value) {
            map.set(key, value + 1);
        } else {
            map.set(key, 1);
        }

        if (max < map.get(str[i])) {
            max = map.get(str[i]);
            answer = str[i];
        }
    }

    return answer;
};

let str = 'BACBACCACCBDEDE';
solution(str);
