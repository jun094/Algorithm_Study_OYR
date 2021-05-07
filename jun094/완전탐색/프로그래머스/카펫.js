const findYellowSize = (brown, yellow) => {
    const half = Math.sqrt(yellow);

    for (let i = yellow; i >= half; i--) {
        if (yellow % i === 0) {
            let y_w = i; //yellow 가로 길이
            let y_h = yellow / i; // yellow 세로 길이
            let b_num = y_w * 2 + y_h * 2 + 4; // 위의 yellow일 때, brown 개수

            if (b_num === brown) return [y_w, y_h];
        }
    }
};

const solution = (brown, yellow) => {
    let ans = [0, 0];
    let y_size = findYellowSize(brown, yellow);

    ans[0] = y_size[0] + 2;
    ans[1] = y_size[1] + 2;

    return ans;
};

let brown = 10;
let yellow = 2;

solution(brown, yellow);
