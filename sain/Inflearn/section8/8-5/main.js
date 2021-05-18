console.log("main.js");

function solution(input) {
  let answer = "NO";
  const inputLen = input.length;
  const total = input.reduce((acc, value) => acc + value, 0);

  function subset(idx, sum) {
    if (idx === inputLen) {
      if (total - sum === sum) answer = "YES";
      return;
    }

    subset(idx + 1, sum + input[idx]);
    subset(idx + 1, sum);
  }

  subset(0, 0);

  return answer;
}

const input = [1, 3, 5, 6, 7, 10];

console.log(solution(input));
