const solution = (n, top) => {
    let answer = [];
    let height = n; //파스칼 삼각형 높이

    const recursive = (level, parent) => {
        if (parent <= n) {
            if (level === height) {
                console.log(level, parent);
                answer.push(parent);
            }

            return;
        }

        for (let i = 1; i <= parent / 2; i++) {
            let l = i;
            let r = parent - i;

            recursive(level + 1, l);
            recursive(level + 1, r);
        }
    };
    recursive(1, top);

    return answer;
};

solution(4, 16);
