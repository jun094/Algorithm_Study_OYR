const solution = (arr) => {
    let len = arr.length;
    let idx = 0;

    arr.sort((a, b) => {
        return b - a;
    });
    while (idx < len) {
        if (idx >= arr[idx]) {
            //console.log(answer);
            return idx;
        }

        idx++;
    }
};

let citations = [3, 0, 6, 1, 5];
solution(citations);
