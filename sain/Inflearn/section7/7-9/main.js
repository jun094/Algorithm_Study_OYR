console.log("main.js");

function solution(input) {
  let answer = 0;
  const arrLen = input.length;
  const timeline = [];

  for (let i = 0; i < arrLen; i++) {
    timeline.push([input[i][0], "s"]);
    timeline.push([input[i][1], "e"]);
  }

  timeline.sort((a, b) => {
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    else return a[0] - b[0];
  });

  let cnt = 0;
  for (let i = 0; i < timeline.length; i++) {
    if (timeline[i][1] === "s") cnt++;
    else cnt--;
    answer = Math.max(answer, cnt);
  }

  return answer;
}

const input = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];

console.log(solution(input));
