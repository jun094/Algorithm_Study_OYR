const checkTwoStr = (str1, str2) => {
    const len = str1.length;
    let cnt = 0; //다른게 1개만 있어야함

    for (let i = 0; i < len; i++) {
        if (str1[i] !== str2[i]) {
            cnt++;
        }

        // 다른게 2개 이상이면 false
        if (cnt >= 2) return false;
    }

    if (cnt === 1) return true;

    // 다른게 0개 이면 false
    return false;
};
const initGraph = (arr) => {
    const n = arr.length; //begin을 포함한 배열의 길이
    let graph = new Map();

    for (let i = 0; i < n; i++) {
        let tmp = [];
        for (let j = 0; j < n; j++) {
            if (checkTwoStr(arr[i], arr[j])) {
                tmp.push(arr[j]);
            }
        }

        graph.set(arr[i], tmp);
    }

    return graph;
};

const solution = (begin, target, words) => {
    if (words.includes(target) === false) return 0;

    words.push(begin);

    let graph = initGraph(words);
    let queue = [];
    let visited = new Map();

    for (let key of words) {
        visited.set(key, false);
    }

    queue.unshift(begin);
    visited.set(begin, 0);

    while (queue.length !== 0) {
        let t = queue.pop();
        let linkNodes = graph.get(t).slice(); // t의 연결 노드들

        if (t === target) {
            return visited.get(t);
        }

        for (let i = 0, len = linkNodes.length; i < len; i++) {
            let node = linkNodes[i];

            if (visited.get(node) === false) {
                queue.unshift(node);
                visited.set(node, visited.get(t) + 1);
            }
        }
    }
};

solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']);
