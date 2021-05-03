console.log("main.js");

function solution(input) {
  let answer = null;
  let max = 0;
  const inputLen = input.length;
  const mapped = {};

  for (let i = 0; i < inputLen; i++) {
    if (!mapped[input[i]]) mapped[input[i]] = 0;
    mapped[input[i]]++;
  }

  Object.keys(mapped).forEach((key) => {
    if (mapped[key] > max) {
      max = mapped[key];
      answer = key;
    }
  });

  return answer;
}

const input = "BACBACCACCBDEDE";

console.log(solution(input));
