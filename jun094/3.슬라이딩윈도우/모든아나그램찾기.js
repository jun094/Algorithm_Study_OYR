const setHashMap = (arr) => {
    let hm = new Map();

    for (let i = 0, len = arr.length; i < len; i++) {
        let key = arr[i];
        let value = hm.get(key);

        if (value) {
            hm.set(key, value + 1);
        } else {
            hm.set(key, 1);
        }
    }

    return hm;
};

const isAnagram = (hm1, hm2) => {
    for (let [key1, val1] of hm1) {
        if (hm2.get(key1) !== val1) return false;
    }

    return true;
};

const solution = (s, t) => {
    let answer = 0;
    const t_len = t.length;
    const s_len = s.length;
    let hm = setHashMap(t);

    let window = '';

    let lt = 0;
    let rt = t_len;

    //sliding-window
    while (rt - 1 !== s_len) {
        let window = s.slice(lt, rt);
        let hm_tmp = setHashMap(window);

        if (isAnagram(hm_tmp, hm)) {
            answer++;
            console.log(hm_tmp);
        }

        //sliding
        lt++;
        rt++;
    }

    return answer;
};
const s = 'bacaAacba';
const t = 'abc';
solution(s, t);
