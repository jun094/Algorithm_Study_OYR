const lowerBound = () => {};
const upperBound = () => {};

//값이 [left_value, right_value] 인 데이터의 개수를 반환하는 함수
const count_by_range = (arr, lv, rv) => {
    let lt = arr.indexOf(lv);
    let rt = arr.lastIndexOf(rv);

    lt = lt === -1 ? 0 : lt;
    rt = rt === -1 ? arr.length - 1 : rt;

    return rt - lt + 1;
};

const solution = (words, queries) => {
    let answer = [];
    const n = words.length;
    let tmp = Array.from(Array(10 + 1), () => Array(0).fill([]));
    //10000;

    for (let i = 0; i < n; i++) {
        tmp[words[i].length].push(words[i]);
    }
    for (let i = 0; i < n; i++) {
        if (tmp[i].length !== 0) tmp[i].sort();
    }
    window.tmp = tmp;

    return answer;
};

const words = ['frodo', 'front', 'frost', 'frozen', 'frame', 'kakao'];
const queries = ['fro??', '????o', 'fr???', 'fro???', 'pro?'];
solution(words, queries);

//result [3, 2, 4, 1, 0]
