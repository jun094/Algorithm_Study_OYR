const solution = (n, arr, m, arr2) => {
    let answer = [];
    let i = 0; //arr 배열 포인터
    let j = 0; //arr2 배열 포인터

    while (i !== n && j !== m) {
        if (arr[i] < arr2[j]) {
            answer.push(arr[i]);
            i++;
        } else {
            answer.push(arr2[j]);
            j++;
        }
    }

    //arr배열이 다 answer에 들어간 경우
    if (i === n) {
        answer.push(...arr2.slice(j));
    } else {
        answer.push(...arr.slice(i));
    }

    return answer;
};
let n = 3;
let arr = [1, 3, 11];
let m = 5;
let arr2 = [2, 3, 6, 7, 9];

solution(n, arr, m, arr2);
