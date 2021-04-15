const solution = (arr) => {
    let ans;

    ans = arr
        .map((number) => number.toString())
        .sort((a, b) => b + a - (a + b))
        .join('');

    return ans.replace(/(^0+)/, '0');
};

let arr = [0, 0, 0, 0];
solution(arr);
