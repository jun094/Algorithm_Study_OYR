//https://so0choi.github.io/2020/08/21/Algorithm/Greedy04/

const solution = (money) => {
    const n = money.length;
    let possible = 1;

    money.sort((a, b) => a - b);

    for (let m of money) {
        if (m <= possible) possible += m;
        else break;
    }

    return possible;
};

solution([3, 5, 7]);
