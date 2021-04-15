console.log("main.js");

function solution(input) {
  let answer = "";
  let filtered = "";
  let reversed = "";
  const loweredCase = input.toLowerCase();
  filtered = loweredCase.replace(/[^a-z]/g, "");
  const filteredLen = filtered.length;

  for (let i = filteredLen - 1; i >= 0; i--) {
    reversed += filtered[i];
  }

  if (reversed === filtered) answer = "YES";
  else answer = "NO";

  return answer;
}

const input = "found7, time: study; Yduts; emit, 7Dnuof";
const input2 = "gOodG";

console.log(solution(input));
