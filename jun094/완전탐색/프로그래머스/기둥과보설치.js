const printArr = (arr) => {
    const len = arr.length;

    for (let i = 0; i < len; i++) {
        console.log(i, JSON.stringify(arr[i]));
    }
};

const initMap = (n) => {
    let arr = [];

    for (let i = 0; i < n + 1; i++) {
        let tmp = [];
        for (let j = 0; j < n + 1; j++) {
            tmp.push([i, j, 0, 0]);
        }
        arr.push(tmp);
    }
    return arr;
};

const solution = (n, build_frame) => {
    const frame = build_frame.length;
    let answer = [];
    let x, y, type, action;
    let map = initMap(n);

    //기둥과 보가 모두 미설치된 map
    //map[x][y][2] : (x,y) 기둥
    //map[x][y][3] : (x,y) 보

    const isPossible = (now_block, x, y) => {
        let res = true;
        // 기둥가능 여부
        // 1. 바닥에 있음
        // 2. (x,y-1)에 기둥이 있음
        // 3. (x-1,y)에 보가 있음
        // 4. (x,y)에 보가 있음
        if (now_block[x][y][2] === 1) {
            if (y === 0 || now_block[x][y - 1][2] === 1 || now_block[x][y][3] === 1 || (x > 0 && now_block[x - 1][y][3] === 1)) {
                res = true;
            } else {
                return false;
            }
        }

        // 보 가능 여부
        // 1. (x,y-1)에 기둥이 있음
        // 2. (x+1,y-1)에 기둥이 있음
        // 2. (x-1,y)와 (x+1,y) 에 보가 있음
        if (now_block[x][y][3] === 1) {
            if (
                (y > 0 && now_block[x][y - 1][2] === 1) ||
                (x < n && y > 0 && now_block[x + 1][y - 1][2] === 1) ||
                (x > 0 && x < n && now_block[x - 1][y][3] === 1 && now_block[x + 1][y][3] === 1)
            ) {
                res = true;
            } else {
                return false;
            }
        }

        return res;
    };

    for (let i = 0; i < frame; i++) {
        x = build_frame[i][0];
        y = build_frame[i][1];
        type = build_frame[i][2]; // 기둥 or 보
        action = build_frame[i][3]; // 설치 or 삭제

        //console.log(x, y, type, action);

        //기둥 설치
        if (type === 0 && action === 1) {
            map[x][y][2] += 1;

            if (isPossible(map, x, y) === false) {
                map[x][y][2] -= 1;
            }
        }
        //보 설치
        else if (type === 1 && action === 1) {
            map[x][y][3] += 1;

            if (isPossible(map, x, y) === false) {
                map[x][y][3] -= 1;
            }
        }
        //기둥 삭제
        else if (type === 0 && action === 0) {
            if (map[x][y][2] > 0) {
                map[x][y][2] -= 1;
                // 기둥 삭제시 함께 체크할 것
                // (x,y+1) 기둥, (x-1,y+1) 보

                for (let i = 0; i < n + 1; i++) {
                    for (let j = 0; j < n + 1; j++) {
                        if (isPossible(map, i, j) === false) {
                            map[x][y][2] += 1;
                            break;
                        }
                    }
                }
            }
        }

        //보 삭제
        else {
            if (map[x][y][3] > 0) {
                map[x][y][3] -= 1;
                // 보 삭제시 함께 체크할 것
                // (x-1,y) 보, (x+1,y) 보
                for (let i = 0; i < n + 1; i++) {
                    for (let j = 0; j < n + 1; j++) {
                        if (isPossible(map, i, j) === false) {
                            map[x][y][3] += 1;
                            break;
                        }
                    }
                }
            }
        }

        // console.log('기둥, 보');
        // printArr(map);
    }

    for (let i = 0; i < n + 1; i++) {
        for (let j = 0; j < n + 1; j++) {
            if (map[i][j][2] > 0) {
                answer.push([i, j, map[i][j][2] - 1]);
            }
            if (map[i][j][3] > 0) {
                answer.push([i, j, map[i][j][3]]);
            }
        }
    }

    return answer;
};

solution(5, [[1], []]);
