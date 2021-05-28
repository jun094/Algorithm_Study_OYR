const initGraph = (arr, len) => {
    let graph = {};

    for (let i = 0; i < len; i++) {
        let tmp = [];
        let v = arr[i][0];
        for (let j = i; j < len; j++) {
            console.log(i, j, v, graph);

            if (v === arr[j][0]) {
                tmp.push(arr[j][1]);
            } else {
                i = j - 1;
                j = len;
            }

            // 더이상 탐색할게 없을때
            if (j === len - 1) {
                i = len;
                j = len;
            }
        }

        graph[v] = tmp;
    }
    console.log(JSON.stringify(graph));

    return graph;
};

function solution(tickets) {
    var answer = ['ICN'];
    const len = tickets.length;
    let graph = [];
    let graph_len = 0;

    tickets.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] >= b[1] ? 1 : -1;
        } else {
            return a[0] >= b[0] ? 1 : -1;
        }
    });
    console.log(tickets);

    // 인접 정보 그래프 초기화
    graph = initGraph(tickets, len);
    graph_len = graph.length;
    window.g = graph;

    // dfs 탐색
    const dfs = (graph, v) => {
        if (graph[v].reduce((a, b) => a + b, 0) === graph[v].length * -1) return;
        //if (!graph[v]) return;
        let i = 0;
        while (i !== graph[v].length) {
            let node = graph[v][i];

            if (node !== -1) {
                answer.push(node);
                graph[v][i] = -1;

                return dfs(graph, node);
            }

            i++;
        }
    };
    dfs(graph, 'ICN');

    return answer;
}

let tickets2 = [
    ['ICN', 'B'],
    ['B', 'ICN'],
    ['ICN', 'A'],
    ['A', 'D'],
    ['D', 'A'],
];
let tickets = [
    ['ICN', 'SFO'],
    ['ICN', 'ATL'],
    ['SFO', 'ATL'],
    ['ATL', 'ICN'],
    ['ATL', 'SFO'],
];
solution(tickets2);
