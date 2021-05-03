const solution = (arr) => {
    let ans = 0;
    const len = arr.length;
    let map = Array.from(Array(len + 2).fill(0), () => Array(len + 2).fill(0));

    //map함수 설정
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            map[i + 1][j + 1] = arr[i][j];
        }
    }

    //봉우리 체크
    for (let i = 1; i < len + 1; i++) {
        for (let j = 1; j < len + 1; j++) {
            if (map[i][j] > map[i][j - 1] && map[i][j] > map[i + 1][j] && map[i][j] > map[i][j + 1] && map[i][j] > map[i - 1][j]) ans++;
        }
    }

    return ans;
};

let arr = [
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
];

solution(arr);
