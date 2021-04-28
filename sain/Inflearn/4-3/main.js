console.log("main.js");

function solution(input) {
  let answer = null;
  const M = input.length;
  const N = input[0].length;

  for (let w = 1; w <= N; w++) {
    for (let x = 1; x <= N; x++) {
      let cnt = 0;
      for (i = 0; i < M; i++) {
        let mentor = 0;
        let mentee = 0;
        for (j = 0; j < N; j++) {
          if (input[i][j] === w) mentor = j;
          if (input[i][j] === x) mentee = j;
        }
        if (mentor < mentee) cnt++;
      }
      if (cnt === M) answer++;
    }
  }

  return answer;
}

const input = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];

console.log(solution(input));
