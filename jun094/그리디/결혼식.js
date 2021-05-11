const solution = (arr) => {
    const len = arr.length;
    let tmp = [];
    let answer = -1;
    let people = 0;

    for (let i = 0; i < len; i++) {
        tmp.push([arr[i][0], 's']);
        tmp.push([arr[i][1], 'e']);
    }

    tmp.sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0];
        else {
            if (a[1] === 'e' && b[1] === 's') return -1;
            else return 1;
        }
    });
    console.log(tmp);

    for (let i = 0; i < len * 2; i++) {
        if (tmp[i][1] === 's') people++;
        else people--;

        answer = answer < people ? people : answer;
    }

    return answer;
};

const arr = [
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14],
];

solution(arr);
