//https://programmers.co.kr/learn/courses/30/lessons/72411
// 조합+해쉬맵

//배열 arr 의 nCm의 조합 개수
const makeCombi = (arr, n, m) => {
    let combiLists = [];
    let combi = Array(m).fill(0);

    const dfs = (L, s) => {
        if (L === m) {
            //list에 넣어주기
            combiLists.push(combi.slice());
        } else {
            for (let i = s; i < n; i++) {
                combi[L] = arr[i];
                dfs(L + 1, i + 1);
            }
        }
    };
    dfs(0, 0);

    return combiLists;
};
//코스별 조합의 개수를 구함 , 내림차순 정렬
const makeHm = (arr) => {
    let hm = new Map();
    let sortArr = [];

    for (let combi of arr) {
        let val = combi.join('');
        if (hm.has(val)) {
            hm.set(val, hm.get(val) + 1);
        } else {
            hm.set(val, 1);
        }
    }

    sortArr = [...hm.entries()].sort((a, b) => b[1] - a[1]);

    return sortArr;
};
const solution = (orders, course) => {
    let answer = [];
    const course_len = course.length;
    let orderArr = [];

    for (let order of orders) {
        let arr = order.split('');

        arr.sort((a, b) => {
            if (a < b) return -1;
            else return 1;
        });

        orderArr.push(arr);
    }

    for (let i = 0; i < course_len; i++) {
        let tmp = [];
        let sortMenu = [];
        let max = 0; //가장 많이 주문된 개수

        for (let arr of orderArr) {
            const n = arr.length;
            const m = course[i];

            //nCm 구해야하는데 n<m인경우는 구할 수 없음
            if (n >= m) tmp.push(...makeCombi(arr, n, m));
        }

        sortMenu = makeHm(tmp); //코스 개수만큼 뽑아, 개수 만큼 정렬된 메뉴들

        if (sortMenu.length > 0) {
            max = sortMenu[0][1];
            //가장 많이 주문된 메뉴 구성이 여러개 담기, 단 주문수가 2개 이상일때
            for (let [key, val] of sortMenu) {
                if (val >= 2 && val === max) {
                    answer.push(key);
                } else {
                    break;
                }
            }
        }
    }

    return answer.sort((a, b) => {
        if (a < b) return -1;
        else return 1;
    });
};

solution(['XYZ', 'XWY', 'WXA'], [2, 3, 4]);
