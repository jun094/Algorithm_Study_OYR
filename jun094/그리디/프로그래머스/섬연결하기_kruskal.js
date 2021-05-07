//그래프 대표값 찾기
const find = (parent, n) => {
    if (parent[n] !== n) {
        parent[n] = find(parent, parent[n]);
    }
    return parent[n];
};

//그래프 합치기 작업
const union = (parent, p1, p2) => {
    p1 > p2 ? (parent[p1] = p2) : (parent[p2] = p1);
};

const solution = (n, costs) => {
    const len = costs.length;
    let parent = [];
    let answer = 0;
    let i = 0;

    for (let i = 0; i < n; i++) {
        parent[i] = i;
    }
    costs.sort((a, b) => {
        return a[2] - b[2];
    });

    for (let i = 0; i < len; i++) {
        let p1 = find(parent, costs[i][0]);
        let p2 = find(parent, costs[i][1]);

        //두 그래프의 대표값이 다를때, union 작업 진행
        if (p1 !== p2) {
            union(parent, p1, p2);
            answer += costs[i][2];
        }
    }

    //console.log(parent);
    return answer;
};

let n = 4;
let costs = [
    [0, 1, 1],
    [0, 2, 2],
    [1, 2, 5],
    [1, 3, 1],
    [2, 3, 8],
];
let n2 = 6;
let costs2 = [
    [0, 1, 29],
    [0, 5, 10],
    [1, 6, 15],
    [1, 2, 16],
    [2, 3, 12],
    [3, 6, 18],
    [3, 4, 22],
    [4, 6, 25],
    [4, 5, 27],
];
//102
solution(n, costs);
