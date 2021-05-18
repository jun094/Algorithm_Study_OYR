console.log("main.js");

function solution(input) {
  let answer = null;
  const inputLen = input.length;
  const sorted = input.slice().sort();
  const finded = [];

  for (let i = 0; i < inputLen; i++) {
    if (input[i] !== sorted[i]) {
      finded.push(i + 1);
    }
  }

  answer = finded;
  return answer;
}

const input1 = [120, 125, 152, 130, 135, 135, 143, 127, 160];
const input2 = [120, 130, 150, 150, 130, 150];

console.log(solution(input2));
