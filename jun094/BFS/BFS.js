const solution = (arr) => {
    let answer = [1];
    const len = arr.length;
    let visited = Array(len + 1).fill(false);
    let queue = [];

    //bfs
    queue.unshift(1);
    visited[1] = true;

    while (queue.length !== 0) {
        let v = queue.pop();
        console.log('start', v);

        for (let i = 0; i < arr[v].length; i++) {
            if (visited[arr[v][i]] === false) {
                queue.unshift(arr[v][i]);
                visited[arr[v][i]] = true;
                answer.push(arr[v][i]);
            }

            console.log(answer);
        }
    }

    return answer;
};

let arr = [[], [2, 3, 8], [1, 7], [1, 4, 5], [3, 5], [3, 4], [7], [2, 6, 8], [1, 7]];

solution(arr);

//1 2 3 8 7 4 5 6
