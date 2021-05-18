console.log("main.js");

function solution(input) {
  let answer = "";

  function recursiveBinary(decimal) {
    if (decimal === 0) {
      return;
    }
    recursiveBinary(Math.floor(decimal / 2));
    answer += decimal % 2;
  }

  recursiveBinary(input);

  return answer;
}

const input = 11;

console.log(solution(input));
