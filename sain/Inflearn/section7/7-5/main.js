console.log("main.js");

function solution(S, N, input) {
  let answer = new Array(S).fill(0);

  for (let i = 0; i < N; i++) {
    let found = false;
    const currentData = input[i];
    for (let j = 0; j < S; j++) {
      if (currentData === answer[j]) {
        let w = j;
        while (w > 0) {
          let temp = answer[w];
          answer[w] = answer[w - 1];
          answer[w - 1] = temp;
          w--;
        }
        found = true;
        break;
      }
    }
    if (!found) {
      answer.unshift(input[i]);
      if (answer.length > 5) answer.pop();
    }
  }

  return answer;
}

const S = 5;
const N = 9;
const input = [1, 2, 3, 2, 6, 2, 3, 5, 7];

console.log(solution(S, N, input));
