const solution = (citations) => {
    let answer = 0;
    const n = citations.length;
    let i = 0;

    citations.sort((a, b) => a - b);

    while (1) {
        let h = citations[i];
        let cnt = n - i; //h 이상인 개수

        if (cnt >= h) {
            answer = h;
        } else {
            return answer;
        }

        i++;
    }
};

solution([3, 0, 6, 1, 5]);
