console.log("main.js");

function solution(input) {
  let answer = 0;

  function solve(sum) {
    if (sum >= input) {
      answer++;
      return;
    }
    solve(sum + 1);
    solve(sum + 2);
  }

  solve(1);

  return answer;
}

const input = 7;

console.log(solution(input));
