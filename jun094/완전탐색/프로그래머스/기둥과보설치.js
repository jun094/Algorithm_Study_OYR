const printArr = (arr) => {
    const len = arr.length;

    for (let i = 0; i < len; i++) {
        console.log(i, JSON.stringify(arr[i]));
    }
};
const solution = (n, build_frame) => {
    let answer = [];
    const frame = build_frame.length;
    //기둥과 보가 모두 미설치된 map
    let map_ki = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
    let map_bo = Array.from(Array(n + 1), () => Array(n + 1).fill(0));

    const isPossible = (x, y) => {
        let res = true;
        // 기둥가능 여부
        // 1. 바닥에 있음
        // 2. (x,y-1)에 기둥이 있음
        // 3. (x-1,y)에 보가 있음
        // 4. (x,y)에 보가 있음
        if (map_ki[x][y] === 1) {
            if (y === 0 || map_ki[x][y - 1] === 1 || map_bo[x][y] === 1 || (x > 0 && map_bo[x - 1][y] === 1)) {
                res = true;
            } else {
                return false;
            }
        }

        // 보 가능 여부
        // 1. (x,y-1)에 기둥이 있음
        // 2. (x+1,y-1)에 기둥이 있음
        // 2. (x-1,y)와 (x+1,y) 에 보가 있음
        if (map_bo[x][y] === 1) {
            if (
                (y > 0 && map_ki[x][y - 1] === 1) ||
                (x < n && y > 0 && map_ki[x + 1][y - 1] === 1) ||
                (x > 0 && x < n && map_bo[x - 1][y] === 1 && map_bo[x + 1][y] === 1)
            ) {
                res = true;
            } else {
                return false;
            }
        }

        return res;
    };

    for (let i = 0; i < frame; i++) {
        let x = build_frame[i][0];
        let y = build_frame[i][1];
        let type = build_frame[i][2]; // 기둥 or 보
        let action = build_frame[i][3]; // 설치 or 삭제

        //console.log(x, y, type, action);

        //기둥 설치
        if (type === 0 && action === 1) {
            map_ki[x][y] = 1;

            if (!isPossible(0, x, y)) {
                map_ki[x][y] = 0;
            }
        }
        //보 설치
        else if (type === 1 && action === 1) {
            map_bo[x][y] = 1;

            if (!isPossible(1, x, y)) {
                map_bo[x][y] = 0;
            }
        }

        //기둥 삭제
        else if (type === 0 && action === 0) {
            map_ki[x][y] = 0;
            // 기둥 삭제시 함께 체크할 것
            // (x,y+1) 기둥, (x-1,y+1) 보
            if (!isPossible(0, x, y) || !isPossible(0, x, y + 1) || !isPossible(1, x - 1, y + 1)) {
                map_ki[x][y] = 1;
            }
        }

        //보 삭제
        else {
            // 보 삭제시 함께 체크할 것
            // (x-1,y) 보, (x+1,y) 보
            map_bo[x][y] = 0;

            if (!isPossible(1, x, y) || !isPossible(1, x - 1, y) || !isPossible(1, x + 1, y)) {
                map_bo[x][y] = 1;
            }
        }

        // console.log('기둥');
        // printArr(map_ki);
        // console.log('보');
        // printArr(map_bo);
    }

    for (let i = 0; i < n + 1; i++) {
        for (let j = 0; j < n + 1; j++) {
            if (map_ki[i][j] === 1) {
                answer.push([i, j, 0]);
            }
            if (map_bo[i][j] === 1) {
                answer.push([i, j, 1]);
            }
        }
    }

    answer.sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0];
        else if (a[1] !== b[1]) return a[1] - b[1];
        else return a[2] - b[2];
    });

    return answer;
};

solution(5, [
    [0, 0, 0, 1],
    [2, 0, 0, 1],
    [4, 0, 0, 1],
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [2, 1, 1, 1],
    [3, 1, 1, 1],
    [2, 0, 0, 0],
    [1, 1, 1, 0],
    [2, 2, 0, 1],
]);
