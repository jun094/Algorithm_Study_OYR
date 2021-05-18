console.log("main.js");

function solution(num) {
  let answer = 1;

  function calcFactorial(num) {
    answer *= num;
    if (num <= 1) {
      return;
    }
    calcFactorial(num - 1);
  }

  calcFactorial(num);

  return answer;
}

const input = 5;

console.log(solution(input));
