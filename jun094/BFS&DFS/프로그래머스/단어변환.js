//글자 길이가 하나만 다를 때는 연결로 취급.
//그래프 최단 거리 구하면 됨.
//가중치 값이 모두 1이므로 bfs
const initGraph = (arr, begin, n, len) => {
    arr.unshift(begin);
    let graph = [];

    for (let i = 0; i < len; i++) {
        let tmp = [];
        for (let j = 0; j < len; j++) {
            if (i !== j) {
                let cnt = 0;

                for (k = 0; k < n; k++) {
                    if (arr[i][k] !== arr[j][k]) cnt++;
                }

                //한 글자만 같으면 간선 연결
                if (cnt === 1) {
                    tmp.push(j);
                }
            }
        }
        graph[i] = tmp;
    }
    return graph;
};

const solution = (begin, target, words) => {
    const graph_len = words.length + 1;
    const n = begin.length;
    let graph = initGraph(words, begin, n, graph_len);
    let queue = [0];
    let visited = new Array(graph_len).fill(-1);

    let t = words.indexOf(target);

    if (t === -1) return 0;
    //bfs 탐색
    visited[0] = 0;

    while (queue.length !== 0) {
        let v = queue.pop();

        for (let i = 0; i < graph[v].length; i++) {
            let node = graph[v][i];

            ///방문하지 않은 노드일떄
            if (visited[node] === -1) {
                queue.unshift(node);
                visited[node] = visited[v] + 1;
            }
        }
    }

    return visited[t];
};

begin = 'hit';
target = 'cog';
words = ['hot', 'dot', 'dog', 'lot', 'log', 'cog'];
solution(begin, target, words);
