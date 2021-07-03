const solution = (s, n, arr) => {
    let stack = Array(s).fill(0);

    for (let i = 0; i < n; i++) {
        let idx = stack.findIndex((ele) => ele === arr[i]);

        if (idx >= 0) {
            stack.splice(idx, 1);
        } else {
            stack.pop();
        }

        stack.unshift(arr[i]);
        console.log(stack);
    }
};

let s = 5;
let n = 9;
let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];

solution(s, n, arr);
