const solution = (n, r) => {
    let answer = 0;
    let tmp;
    const recursion = (n, r) => {
        if (n === r) return 1;
        else if (n !== 1 && r === 1) return n;
        else {
            tmp = recursion(n - 1, r - 1) + recursion(n - 1, r);
        }
        return tmp;
    };

    answer = recursion(n, r);

    return answer;
};

solution(33, 19);
