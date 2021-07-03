const insertSort = (arr) => {
    const len = arr.length;
    let j, key;

    for (let i = 1; i < len; i++) {
        j = i - 1;
        key = arr[i];

        while (j >= 0 && key < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }

    return arr;
};

const arr = [11, 7, 5, 6, 10, 9];

insertSort(arr);
