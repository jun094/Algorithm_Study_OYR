const solution = (arr, m) => {
    const len = arr.length; //동전 종류의 개수
    let min = 9999;

    const dfs = (idx, sum) => {
        if (sum > m) return;
        else if (sum === m) {
            min = min > idx ? idx : min;
            return;
        } else {
            for (let i = 0; i < len; i++) {
                dfs(idx + 1, sum + arr[i]);
            }
        }
    };

    dfs(0, 0);

    return min;
};

const arr = [1, 2, 5];
const m = 15;

solution(arr, m);
