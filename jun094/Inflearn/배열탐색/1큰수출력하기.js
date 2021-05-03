const solution = (arr) => {
    let ans = [];

    ans = arr.filter((i, idx) => {
        if (idx === 0 || i > arr[idx - 1]) return i;
    });

    console.log(ans);
};

let arr = [7, 3, 9, 5, 6, 12];

solution(arr);
