console.log("main.js");

function solution(input) {
  let answer = null;

  function recursiveFunction(num) {
    if (num === 0) return;
    recursiveFunction(num - 1);
    console.log(num);
  }

  recursiveFunction(input);

  return answer;
}

const input = 3;

console.log(solution(input));
