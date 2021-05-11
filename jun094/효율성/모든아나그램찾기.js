const isSameMap = (map1, map2) => {
    for (let [key, value] of map1) {
        if (map2.get(key) !== value) {
            return false;
        }
    }

    return true;
};

const setMap = (str, len) => {
    let map = new Map();

    for (let i = 0; i < len; i++) {
        let key = str[i];
        let value = map.get(key);

        if (value) {
            map.set(key, value + 1);
        } else {
            map.set(key, 1);
        }
    }

    return map;
};

const solution = (s, t) => {
    let answer = 0;
    let len_t = t.length;
    let len_s = s.length;

    let map_t = new Map();
    let map_tmp = new Map(); // s에서 3개씩 담을 map 공간

    map_t = setMap(t, len_t);

    for (let i = 0; i < len_s - len_t + 1; i++) {
        let str = '';

        for (let j = i; j < i + len_t; j++) {
            str += s[j];
        }

        map_tmp = setMap(str, len_t);

        if (isSameMap(map_tmp, map_t)) answer++;

        map_tmp.clear();
    }

    return answer;
};
const s = 'bacaAacba';
const t = 'abc';
solution(s, t);
