const solution = (arr) => {
    let answer = 1;
    const n = arr.length;

    //조건 1 : 끝나는 시간 오름차순
    //조건 2 : 시작하는 시간 오름차순
    arr.sort((a, b) => {
        if (a[1] !== b[1]) return a[1] - b[1];
        else return a[0] - b[0];
    });

    console.log(arr);

    let prev = arr[0];
    for (let i = 1; i < n; i++) {
        let now = arr[i];

        console.log(prev, now);

        if (prev[1] <= now[0]) {
            prev = now;
            answer++;
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
