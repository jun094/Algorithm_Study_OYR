const solution = (arr1, arr2) => {
    let answer = [];
    const n = arr1.length;
    const m = arr2.length;
    let i = 0;
    let j = 0;

    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);

    while (i !== n && j !== m) {
        if (arr1[i] === arr2[j]) {
            answer.push(arr1[i]);
            i++;
            j++;
        } else if (arr1[i] < arr2[j]) {
            i++;
        } else {
            j++;
        }
    }

    return answer;
};

const arr1 = [1, 3, 9, 5, 2];
const arr2 = [3, 2, 5, 7, 8];

solution(arr1, arr2);
