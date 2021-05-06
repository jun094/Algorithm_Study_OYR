const solution = (arr) => {
    let answer = [];
    const len = arr.length;
    let tmp = arr.slice(); //복사 주의!!!!!

    tmp.sort((a, b) => a - b);
    for (let i = 0; i < len; i++) {
        if (tmp[i] !== arr[i]) answer.push(i + 1);
    }

    return answer;
};

let arr = [120, 130, 150, 150, 130, 150];
solution(arr);
