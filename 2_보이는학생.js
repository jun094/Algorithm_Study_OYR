const solution = (arr) => {
    let ans = 1;
    let len = arr.length;
    let t = arr[0];

    //2부터 시작이 핵심인듯!
    for (let i = 2; i < len; i++) {
        if (arr[i] > arr[i - 1]) {
            ans++;
        }
    }

    console.log(ans);
};

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
solution(arr);
