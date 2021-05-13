console.log("main.js");

function solution(limit, problems) {
  let answer = 0;
  const pLen = problems.length;

  function findMax(idx, sScore, sTime) {
    if (sTime > limit) return;
    if (idx === pLen) {
      if (sScore > answer) answer = sScore;
      return;
    }

    findMax(idx + 1, sScore + problems[idx][0], sTime + problems[idx][1]);
    findMax(idx + 1, sScore, sTime);
  }

  findMax(0, 0, 0);

  return answer;
}

const input = {
  limit: 20,
  problems: [
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4],
  ],
};

const { limit, problems } = input;

console.log(solution(limit, problems));
