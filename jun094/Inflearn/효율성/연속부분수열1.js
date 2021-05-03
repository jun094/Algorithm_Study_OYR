const solution = (nm, arr) => {
    const n = nm[0];
    const m = nm[1];
    let answer = 0;
    let sum = 0;
    let partial = [];

    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            sum += arr[j];

            if (sum === m) {
                partial.push(arr.slice(i, j + 1));
                answer++;

                j = n; //내부 for문 탈출
            } else if (sum > m) {
                j = n; //내부 for문 탈출
            }
        }
        sum = 0;
    }

    console.log(partial);
    return answer;
};

let nm = [8, 6];
let arr = [1, 2, 1, 3, 1, 1, 1, 2];

solution(nm, arr);
