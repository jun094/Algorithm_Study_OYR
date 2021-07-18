//https://programmers.co.kr/learn/courses/30/lessons/43165

const solution = (numbers, target) => {
    let answer = 0;
    const n = numbers.length;

    const dfs = (level, sum) => {
        if (level === n) {
            if (sum === target) {
                answer++;
            }
            return;
        } else {
            dfs(level + 1, sum + numbers[level]);
            dfs(level + 1, sum + numbers[level] * -1);
        }
    };
    dfs(0, 0);

    return answer;
};

solution([1, 1, 1, 1, 1], 3);
