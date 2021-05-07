const selectionSort = (arr) => {
    const len = arr.length;
    let min;
    let tmp = 0;

    for (let i = 0; i < len - 1; i++) {
        min = i;

        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }

        tmp = arr[min];
        arr[min] = arr[i];
        arr[i] = tmp;

        //js최신 문법 swap : [arr[i], arr[idx]]=[arr[idx], arr[i]]
    }
    return arr;
};

const arr = [13, 5, 11, 7, 23, 15];

selectionSort(arr);
