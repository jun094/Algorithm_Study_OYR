const initGraph = (tickets) => {
    let graph = new Map();

    //시작 지점에서 도착할 수 있는 지점이 여러개라면 알파벳이 우선인 것을 먼저 탐색한다.
    tickets.sort((a, b) => {
        if (a[1] < b[1]) return -1;
        else return 1;
    });

    for (let [a, b] of tickets) {
        //grap 만들기용
        if (graph.has(a) === false) {
            graph.set(a, [b]);
        } else {
            let tmp = graph.get(a);
            tmp.push(b);

            graph.set(a, tmp);
        }
    }

    return graph;
};

const solution = (tickets) => {
    //dfs 탐색

    let answer = [];
    let graph = new Map();
    let visited = new Map();
    let edge = tickets.length; // 간선 개수

    for (let i = 0; i < edge; i++) {
        let key = tickets[i].join('');

        if (visited.has(key) === false) {
            visited.set(key, false);
        } else {
            //중복된 티겟을 위한 조치.
            tickets[i][1] += i;
            visited.set(key + i, false);
        }
    }

    graph = initGraph(tickets);

    const dfs = (start) => {
        let v = start.slice(0, 3);
        let endLists = graph.get(v); //start 에서 방문가능한 곳들

        answer.push(v);

        if (!endLists) return; // start에서 방문 가능한 곳이 없으면 return

        for (let i = 0, len = endLists.length; i < len; i++) {
            let end = endLists[i];

            //start->end 가능 경로를 아직 방문 안했다면 방문
            if (visited.get(v + end) === false) {
                visited.set(v + end, true);
                dfs(end);

                //dfs를 수행했는데 재귀 up 하는 과정에서 모든 지점이 방문 처리가 된 것이 아니라면,
                //해당 경로는 다시 미방문 처리(false)로 바꿔준다.
                if (answer.length !== edge + 1) {
                    visited.set(v + end, false);
                    answer.pop();
                }
            }
        }
    };
    dfs('ICN');
    return answer;
};

solution([
    ['ICN', 'SFO'],
    ['SFO', 'ICN'],
    ['ICN', 'SFO'],
    ['SFO', 'QRE'],
]);
