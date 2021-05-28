const solution = (arr, horse) => {
    arr.sort();

    const n = arr.length;
    let lt = 1;
    let rt = arr[n - 1];

    while (lt <= rt) {
        let mid = Math.floor((lt + rt) / 2);

        if (cnt < horse) {
            rt = mid - 1;
        } else if (horse < cnt) {
        } else {
        }
    }
};

const horse = 3;
const arr = [1, 2, 8, 4, 9];

solution(arr, horse);
