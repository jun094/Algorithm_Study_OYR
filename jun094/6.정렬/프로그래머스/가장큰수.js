const solution = (arr) => {
    let answer = '';
    arr.sort();

    for (let i = arr.length - 1; i >= 0; i--) {
        answer += arr[i];
    }

    return answer;
};

let arr = [10, 6, 11, 2];
solution(arr);
