const solution = (finish) => {
    let arr = [];

    const recursive = (i) => {
        if (i === finish) return;

        arr[i] = ++i;

        recursive(i);
    };

    recursive(0);

    return arr;
};

solution(3);
