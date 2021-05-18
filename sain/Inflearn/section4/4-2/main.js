console.log("main.js");

function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return num;
}

function solution(input) {
  let answer = [];
  const arrLen = input.length;

  for (let i = 0; i < arrLen; i++) {
    const reversed = parseInt((input[i] + "").split("").reverse().join(""));
    if (isPrime(reversed)) answer.push(reversed);
  }

  return answer;
}

const input = [32, 55, 62, 20, 250, 370, 200, 30, 100];

console.log(solution(input));
