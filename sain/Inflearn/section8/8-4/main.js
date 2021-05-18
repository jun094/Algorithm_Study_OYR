console.log("main.js");

function solution(input) {
  let answer = [];
  const include = Array(input).fill(false);

  function subset(s) {
    if (s === input + 1) {
      let subs = [];
      for (let i = 0; i < input; i++) {
        if (include[i]) {
          subs.push(i + 1);
        }
      }
      if (subs.length) answer.push(subs);
      return;
    }
    include[s - 1] = true;
    subset(s + 1);
    include[s - 1] = false;
    subset(s + 1);
  }

  subset(1);

  return answer;
}

const input = 3;

console.log(solution(input));
