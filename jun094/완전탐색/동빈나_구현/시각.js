//https://youtu.be/2zjoKjt97vQ?t=2516

const solution = (N) => {
    let answer = 0;
    let h = 0,
        m = 0,
        s = 0;

    while (h < N + 1) {
        if (String(s).includes(3) || String(m).includes(3) || String(h).includes(3)) {
            answer++;
        }

        s++;

        if (s === 60) {
            s = 0;
            m++;
        }

        if (m === 60) {
            m = 0;
            h++;
        }
    }

    return answer;
};
solution(5);
