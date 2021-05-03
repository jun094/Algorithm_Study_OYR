const solution = (arr) => {
    let ans = 0;
    let len = arr.length;

    //1부터 시작이 핵심인듯!
    for (let i = 1; i < len; i++) {
        if (arr[i] > arr[i - 1]) {
            ans++;
        }
    }

    console.log(ans);
};

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
solution(arr);
