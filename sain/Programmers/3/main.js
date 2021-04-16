console.log("main.js");
// https://ryusm.tistory.com/102

function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return num;
}

function subset(numbers, comb, all) {
  console.log(numbers, comb);
  if (numbers.length > 0) {
    for (let i = 0; i < numbers.length; i++) {
      console.log("i >> " + i);
      const excluded = [...numbers];
      excluded.splice(i, 1);
      subset(excluded, comb + numbers[i], all);
    }
  }

  if (comb.length > 0) {
    const num = parseInt(comb);
    const primeNum = isPrime(num);
    if (primeNum && !all.includes(primeNum)) all.push(primeNum);
  }
}

function solution(input) {
  let answer = 0;
  const numbers = input.split("");
  const arrLen = input.length;
  let comb = "";
  const allNumbers = [];

  subset(numbers, comb, allNumbers);

  answer = allNumbers.length;

  return answer;
}

const input1 = "123";
const input2 = "011";

console.log(solution(input1));
