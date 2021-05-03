console.log("main.js");

function solution(numbers) {
  let answer = numbers
    .map((c) => c + "")
    .sort((a, b) => b + a - (a + b))
    .join("");

  return answer[0] === "0" ? "0" : answer;
}

const numbers = [6, 10, 2];
const numbers2 = [3, 30, 34, 5, 9];

console.log(solution(numbers));
