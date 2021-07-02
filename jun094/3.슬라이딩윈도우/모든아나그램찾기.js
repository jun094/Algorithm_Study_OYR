const setHashMap = (arr) => {
    let hm = new Map();

    for (let x of arr) {
        if (hm.has(x)) hm.set(x, hm.get(x) + 1);
        else hm.set(x, 1);
    }
    return hm;
};

const isAnagram = (hm1, hm2) => {
    if (hm1.size !== hm2.size) return false;

    for (let [key, val] of hm1) {
        if (!hm2.has(key) || hm2.get(key) !== val) return false;
    }

    return true;
};

const solution = (s, t) => {
    let answer = 0;
    const t_len = t.length;
    const s_len = s.length;
    let hm = setHashMap(t);
    let hm_window = setHashMap(s.slice(0, t_len));

    let lt = 0;
    let rt = t_len - 1;

    //sliding-window
    while (rt !== s_len) {
        console.log(hm_window);

        if (isAnagram(hm, hm_window)) {
            answer++;
        }

        /** sliding **/
        // s[lt] -1해주고 0이면 delete, 그리고 lt+1
        hm_window.set(s[lt], hm_window.get(s[lt]) - 1);
        if (hm_window.get(s[lt]) === 0) hm_window.delete(s[lt]);
        lt++;

        // rt+1 해주고, s[rt] 있으면 +1, 없으면 1
        rt++;
        if (hm_window.has(s[rt])) hm_window.set(s[rt], hm_window.get(s[rt]) + 1);
        else hm_window.set(s[rt], 1);
    }

    return answer;
};
const s = 'bacaAacba';
const t = 'abc';
solution(s, t);
