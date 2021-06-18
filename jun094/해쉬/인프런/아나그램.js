const solution = (str1, str2) => {
    let map1 = new Map();
    let map2 = new Map();
    const len = str1.length;

    for (let i = 0; i < len; i++) {
        let key1 = str1[i];
        let value1 = map1.get(key1);

        let key2 = str2[i];
        let value2 = map2.get(key2);

        if (value1) {
            map1.set(key1, value1 + 1);
        } else {
            map1.set(key1, 1);
        }

        if (value2) {
            map2.set(key2, value2 + 1);
        } else {
            map2.set(key2, 1);
        }
    }

    for (let [key, value] of map1) {
        if (map2.get(key) !== value) {
            return 'no';
        }
    }

    return 'yes';
};

let str1 = 'abaCC';
let str2 = 'Caaab';

solution(str1, str2);
