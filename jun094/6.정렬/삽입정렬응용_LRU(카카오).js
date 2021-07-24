const solution = (size, arr) => {
    let tmp = Array(size).fill(0);

    for (let a of arr) {
        let idx = size - 1;
        //hit or miss 판별
        for (let i = 0; i < size; i++) {
            if (tmp[i] === a) {
                idx = i;
                break;
            }
        }

        //tmp[i] = tmp[i-1] 복사 작업
        for (let i = idx; i > 0; i--) {
            tmp[i] = tmp[i - 1];
        }
        tmp[0] = a;

        console.log(tmp);
    }
    return tmp;
};

solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]);
