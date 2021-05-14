const solution = (arr) => {
    const n = arr[0][0]; //학생수
    const m = arr[0][1]; //예산
    let answer = n;
    let max = -1;
    let max_idx = 0;
    let sum = 0;
    let diff = 0; //초과비용
    let idx = 1; //초과비용 탐색을 위한 index

    for (let i = 1; i <= n; i++) {
        if (max < arr[i][0]) {
            max = arr[i][0];
            max_idx = i;
        }
        sum = sum + arr[i][0] + arr[i][1];
        arr[i].push(arr[i][0] + arr[i][1]);
    }
    arr[max_idx][0] = arr[max_idx][0] / 2;
    arr[max_idx][2] = arr[max_idx][0] + arr[max_idx][1];
    sum -= arr[max_idx][0];

    //선물가격 + 배송비 내림차순으로 정렬
    arr = arr.sort((a, b) => {
        return b[2] - a[2];
    });

    console.log(arr, sum, max_idx);

    //초과비용이 0 보다 작아질때까지 위에서부터 하나씩 빼기
    diff = sum - m; //초과비용

    while (diff > 0 && idx <= n) {
        diff -= arr[idx][2];

        idx++;
        answer--;
    }

    return answer;
};

let arr = [
    [5, 28],
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3],
];
//4

let arr2 = [
    [5, 22],
    [6, 6],
    [2, 5],
    [4, 3],
    [4, 5],
    [10, 3],
];
//3

let arr3 = [
    [5, 7],
    [6, 6],
    [2, 5],
    [4, 3],
    [4, 5],
    [10, 3],
];
//1

let arr4 = [
    [5, 3],
    [6, 6],
    [2, 5],
    [4, 3],
    [4, 5],
    [10, 3],
];
//0

solution(arr2);
