const solution = (nm, arr) => {
    const n = nm[0];
    const m = nm[1];
    let answer = 0;
    let sum = 0;
    let partial = [];

    for (let i = 0; i < n; i++) {
        sum += arr[i];

        for (let j = i; j < n; j++) {
            if (sum <= m) {
                partial.push(i, j + 1);
            }
        }
    }

    console.log(partial);
    return partial.length;
};

let nm = [5, 5];
const arr = [1, 3, 1, 2, 3];

solution(nm, arr);
