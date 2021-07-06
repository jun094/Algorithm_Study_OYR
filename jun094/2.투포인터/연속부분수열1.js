const solution = (n, m, arr) => {
    let answer = [];

    let lt = 0;
    let rt = 0;
    let sum = arr[0];

    while (rt !== n) {
        if (sum < m) {
            sum += arr[++rt]; //rt 전진하고, 전진한 곳 더하기
        } else if (sum > m) {
            sum -= arr[lt++]; //lt 현재 곳 빼고, 전진하기
        } else {
            answer.push(arr.slice(lt, rt + 1));

            sum -= arr[lt++]; //lt 현재 곳 빼고, 전진하기
            sum += arr[++rt]; //rt 전진하고, 전진한 곳 더하기
        }
    }

    return answer;
};
let arr = [1, 2, 1, 3, 1, 1, 1, 2];

solution(8, 6, arr);
