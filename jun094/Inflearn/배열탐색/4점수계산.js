const solution = (arr) => {
    let ans = 0;
    let len = arr.length;
    let plus = 0;

    for (let i = 0; i < len; i++) {
        if (arr[i] === 0) {
            plus = 0;
        } else if (arr[i - 1] === 1 && arr[i] === 1) {
            plus++;
        } else {
            plus = 1;
        }

        ans = ans + plus;
    }

    return ans;
};

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
solution(arr);
