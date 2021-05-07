const bubleSort = (arr) => {
    const len = arr.length;
    let tmp = 0;

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }

    return arr;
};

const arr = [13, 5, 11, 7, 23, 15];

bubleSort(arr);
