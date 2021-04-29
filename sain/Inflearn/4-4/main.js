console.log("main.js");

function solution(input) {
  let answer = 0;
  const [stdNums, budget] = input.splice(0, 1)[0];
  input.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  const arrLen = input.length;

  for (let i = 0; i < arrLen; i++) {
    let sum = 0;
    let ableStudents = 1;
    // 각 상품을 50% 할인받았을 때 우선 합산
    sum += input[i][0] / 2 + input[i][1];
    for (let j = 0; j < arrLen; j++) {
      const amount = input[j][0] + input[j][1];
      if (j === i) continue;
      else if (sum + amount > budget) break;
      sum += amount;
      ableStudents++;
    }
    if (answer < ableStudents) answer = ableStudents;
  }

  return answer;
}

const input = [
  [5, 28],
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];

console.log(solution(input));
