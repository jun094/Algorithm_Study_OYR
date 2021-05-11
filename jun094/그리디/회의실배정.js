const solution = (arr) => {
    const len = arr.length;
    let answer = 1;
    let end = 0;

    //그리디 기준 1 : 끝나는 시간 오름 차순
    //그리디 기준 2 : 시작 시간 오름 차순
    arr.sort((a, b) => {
        if (a[1] !== b[1]) return a[1] - b[1];
        else {
            return a[0] - b[0];
        }
    });
    end = arr[0][1];

    console.log(arr);

    for (let i = 1; i < len; i++) {
        if (end <= arr[i][0]) {
            answer++;
            end = arr[i][1];
        }
    }

    return answer;
};

const arr = [
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7],
];
const arr2 = [
    [3, 3],
    [1, 3],
    [2, 3],
];

solution(arr2);
