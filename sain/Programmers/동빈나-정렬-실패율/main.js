console.log("main.js");

function solution(N, stages) {
  let answer = [];
  const mapped = {};
  const mappedArr = [];
  const stageLen = stages.length;

  for (let i = 0; i < N; i++) {
    if (!mapped[i + 1]) {
      mapped[i + 1] = {
        tries: 0,
        failed: 0,
        ratio: 0,
      };
    }
  }

  for (let i = 0; i < N; i++) {
    const currentStageLevel = i + 1;
    for (let j = 0; j < stageLen; j++) {
      if (currentStageLevel < stages[j]) {
        mapped[currentStageLevel].tries++;
      } else if (currentStageLevel === stages[j]) {
        mapped[currentStageLevel].tries++;
        mapped[currentStageLevel].failed++;
      }
    }
    const currentTries = mapped[currentStageLevel].tries;
    const currentFailed = mapped[currentStageLevel].failed;
    const currentRatio = currentFailed / currentTries;
    mapped[currentStageLevel].ratio = currentRatio;

    mappedArr.push({ level: i + 1, ratio: currentRatio });
  }

  answer = mappedArr
    .sort((a, b) => {
      if (a.ratio === b.ratio) return a.level - b.level;
      else return b.ratio - a.ratio;
    })
    .map((d) => d.level);

  return answer;
}

const input1 = {
  N: 5,
  stages: [2, 1, 2, 6, 2, 4, 3, 3],
};

const input2 = {
  N: 4,
  stages: [4, 4, 4, 4, 4],
};

const { N, stages } = input2;

console.log(solution(N, stages));
