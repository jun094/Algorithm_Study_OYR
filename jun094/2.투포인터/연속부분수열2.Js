const solution = (n, m, arr) => {
    let answer = 0;
    let lt = 0;
    let rt = 0;
    let sum = arr[0];

    while (rt !== n) {
        if (sum <= m) {
            answer += rt - lt + 1; // rt가 마지막인 부분 수열 개수

            sum += arr[++rt]; //rt 전진 후, 더하기
        } else {
            sum -= arr[lt++];
        }
    }

    return answer;
};

const arr = [1, 3, 1, 2, 3];

solution(5, 5, arr);
