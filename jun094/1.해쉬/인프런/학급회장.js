//해쉬
//자료구조 Map

const solution = (str) => {
    let hash = new Map();
    let answer = -1;

    //해쉬맵 count
    for (let i = 0, n = str.length; i < n; i++) {
        let key = str[i];
        let value = hash.get(str[i]);

        if (value) {
            hash.set(key, value + 1);
        } else {
            hash.set(key, 1);
        }
    }

    //해쉬맵 최대값 찾기 -> for-of 문
    for (let [key, value] of hash) {
        answer = Math.max(value, answer);
    }

    return answer;
};

solution('BACBACCACCBDEDE');
