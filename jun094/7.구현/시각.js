//https://youtu.be/2zjoKjt97vQ?t=2483

const solution = (n) => {
    let answer = 0;

    for (let h = 0; h <= n; h++) {
        for (let m = 0; m <= 59; m++) {
            for (let s = 0; s <= 59; s++) {
                let time = String(h) + String(m) + String(s);

                if (time.indexOf('3') !== -1) {
                    answer++;
                }
            }
        }
    }

    return answer;
};

solution(0);
