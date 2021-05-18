console.log("main.js");

function solution(input) {
  let answer = "";
  let reversed = "";
  const inputLen = input.length;
  const loweredCase = input.toLowerCase();

  for (let i = inputLen - 1; i >= 0; i--) {
    reversed += loweredCase[i];
  }

  if (reversed === loweredCase) answer = "YES";
  else answer = "NO";

  return answer;
}

const input = "gooG";
const input2 = "gOodG";

console.log(solution(input));
