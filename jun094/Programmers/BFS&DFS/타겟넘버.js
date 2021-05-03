const solution = (numbers, target) => {
    let answer = 0;
    const len = numbers.length;

    const dfs = (numbers, idx) => {
        //포화 이진트리 leaf노드까지 왔을 때,
        if (idx === len) {
            let sum = 0;

            for (let i = 0; i < len; i++) {
                sum += numbers[i];
            }
            if (sum === target) {
                answer++;
                return;
            }
        } else {
            numbers[idx] *= 1;
            dfs(numbers, idx + 1);

            numbers[idx] *= -1;
            dfs(numbers, idx + 1);
        }
    };

    dfs(numbers, 0);

    //console.log(answer);
    return answer;
};

let numbers = [1, 1, 1, 1, 1];
let target = 3;

solution(numbers, target);
