const solution = (num) => {
    const arr = [];

    const recursive = (n) => {
        let ans = Math.floor(n / 2);
        let remain = n % 2;

        if (ans === 1) {
            arr.push(remain);
            arr.push(ans);

            return;
        }

        arr.push(remain);
        recursive(ans);
    };

    recursive(num);

    return arr.join('');
};

solution(11);
