// const printArr = (arr) => {
//     const len = arr.length;

//     for (let i = 0; i < len; i++) {
//         console.log(i, JSON.stringify(arr[i]));
//     }
// };
const solution = (key, lock) => {
    const m = key.length;
    const n = lock.length;
    let answer = false;
    let key2 = Array.from(Array(m), () => Array(m).fill(-1));
    let key3 = Array.from(Array(m), () => Array(m).fill(-1));
    let key4 = Array.from(Array(m), () => Array(m).fill(-1));
    let paddingLock = Array.from(Array(n + (m - 1) * 2), () => Array(n + (m - 1) * 2).fill(0)); //lock배열에서 padding 포함된 배열

    //90도, 180도, 270도 key 배열 생성
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < m; j++) {
            key2[i][j] = key[m - 1 - j][i];
            key3[i][j] = key[m - 1 - i][m - 1 - j];
            key4[i][j] = key[j][m - 1 - i];
        }
    }

    // padding 포함된 lock 배열 생성
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            paddingLock[i + m - 1][j + m - 1] = lock[i][j];
        }
    }

    //let idx = 0;
    const checkUnlock = (key, shift_i, shift_j) => {
        let tmp = [];

        //console.log(idx, '번째------');
        //tmp에 paddingLock 깊은 복사해놓기
        for (let i = 0, len = paddingLock.length; i < len; i++) {
            tmp.push(paddingLock[i].slice());
        }
        //console.log('pre');
        //printArr(tmp);

        for (let i = 0, len = m; i < len; i++) {
            for (let j = 0, len = m; j < len; j++) {
                tmp[i + shift_i][j + shift_j] += key[i][j];
            }
        }

        //console.log('after');
        //printArr(tmp);

        //idx++;

        //tmp 값에 0 또는 2가 존재하면 unlock 불가능
        for (let i = m - 1; i < n + m - 1; i++) {
            for (let j = m - 1; j < n + m - 1; j++) {
                if (tmp[i][j] !== 1) return false;
            }
        }

        //console.log(idx, '번째 !!!');
        return true;
    };

    //key 배열을 한칸씩 shift하면서 paddingLock 검사
    for (let i = 0; i < n + m - 1; i++) {
        for (let j = 0; j < n + m - 1; j++) {
            if (checkUnlock(key, i, j)) return true;

            if (checkUnlock(key2, i, j)) return true;

            if (checkUnlock(key3, i, j)) return true;

            if (checkUnlock(key4, i, j)) return true;
        }
    }

    return answer;
};

solution(
    [
        [0, 0, 0],
        [1, 0, 0],
        [0, 1, 1],
    ],
    [
        [1, 1, 1],
        [1, 1, 0],
        [1, 0, 1],
    ]
);
