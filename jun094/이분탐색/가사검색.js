const findLT = (arr, n, target) => {
    let lt = 0;
    let rt = n;

    while (lt < rt) {
        let mid = Math.floor((lt + rt) / 2);

        if (target <= arr[mid]) rt = mid;
        else lt = mid + 1;
    }

    return rt;
};

const findRT = (arr, n, target) => {
    let lt = 0;
    let rt = n;

    while (lt < rt) {
        let mid = Math.floor((lt + rt) / 2);

        if (target < arr[mid]) rt = mid;
        else lt = mid + 1;
    }

    return rt;
};

//값이 [left_value, right_value] 인 데이터의 개수를 반환하는 함수
const count_by_range = (arr, n, lv, rv) => {
    let lt = findLT(arr, n, lv);
    let rt = findRT(arr, n, rv);

    //console.log(arr, lv, rv, rt - lt + '개');

    return rt - lt;
};

const frontReplaceAll = (str) => {
    let tmp = '';
    let tmpA = '';
    let tmpZ = '';
    let idx = 0;

    while (str[idx] === '?') {
        tmp += '?';
        tmpA += 'a';
        tmpZ += 'z';

        idx++;
    }

    return [str.replace(tmp, tmpA), str.replace(tmp, tmpZ)];
};

const rearReplaceAll = (str, n) => {
    let tmp = '';
    let tmpA = '';
    let tmpZ = '';

    let idx = n - 1;

    while (str[idx] === '?') {
        tmp += '?';
        tmpA += 'a';
        tmpZ += 'z';

        idx--;
    }

    return [str.replace(tmp, tmpA), str.replace(tmp, tmpZ)];
};

const solution = (words, queries) => {
    let answer = [];
    const n = words.length;
    let tmp = Array.from(Array(10000 + 1), () => Array(0).fill([]));
    let reverse_tmp = Array.from(Array(10000 + 1), () => Array(0).fill([]));
    //10000;

    for (let i = 0; i < n; i++) {
        tmp[words[i].length].push(words[i]);
        reverse_tmp[words[i].length].push(words[i].split('').reverse().join(''));
    }
    for (let i = 0; i < n; i++) {
        tmp[i].sort();
        reverse_tmp[i].sort();
    }
    //window.tmp = tmp;
    //window.reverse_tmp = reverse_tmp;

    for (let i = 0, len = queries.length; i < len; i++) {
        const query_len = queries[i].length;
        const n = tmp[query_len].length; // 길이가 query_len 문자의 개수

        //모두 ? 인 경우
        if (queries[i][0] === '?' && queries[i][query_len - 1] === '?') {
            answer.push(n); //길이가 query_len 문자 모두 가능
        }
        // 처음에 ?인 경우
        else if (queries[i][0] === '?' && queries[i][query_len - 1] !== '?') {
            let replace_str = frontReplaceAll(queries[i]);
            let lv = replace_str[0];
            let rv = replace_str[1];

            answer.push(count_by_range(reverse_tmp[query_len], n, lv.split('').reverse().join(''), rv.split('').reverse().join('')));
        }
        //마지막에 ?인 경우
        else {
            let replace_str = rearReplaceAll(queries[i], query_len);
            let lv = replace_str[0];
            let rv = replace_str[1];

            answer.push(count_by_range(tmp[query_len], n, lv, rv));
        }
    }
    return answer;
};

const words = ['frodo', 'front', 'frost', 'frozen', 'frame', 'kakao'];
const queries = ['fro??', '????o', 'fr???', 'fro???', 'pro?', '?????'];
solution(words, queries);

//result [3, 2, 4, 1, 0]
