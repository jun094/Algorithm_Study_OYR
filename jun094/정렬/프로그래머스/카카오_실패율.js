const countNum = (arr, i) => {
    return arr.reduce((cnt, element) => cnt + (i === element), 0);
};
const solution = (N, stages) => {
    let answer = [];
    let num = stages.length; // 해당 스테이지 인원 수
    let fail;
    let cnt = 0;

    for (let i = 1; i <= N; i++) {
        cnt = countNum(stages, i); //각 stage의 클리어 인원 수

        if (num === 0) {
            fail = 0;
        } else {
            fail = cnt / num;
        }

        answer.push([fail, i]);
        num -= cnt;
    }

    answer.sort((a, b) => b[0] - a[0]);
    answer = answer.map((i) => i[1]);
    //console.log(answer);
    return answer;
};

const N = 4;
const stages = [4, 4, 4, 4];
solution(N, stages);
