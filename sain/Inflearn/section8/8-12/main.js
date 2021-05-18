console.log("main.js");

function solution(n, r) {
  let answer = 0;
  const check = Array.from(Array(n + 1), () => Array(n + 1).fill(0));

  console.log(check);

  function Combination(n, r) {
    if (check[n][r]) return check[n][r];
    if (n === r || r === 0) {
      return 1;
    }
    return (check[n][r] = Combination(n - 1, r - 1) + Combination(n - 1, r));
  }

  answer = Combination(n, r);

  return answer;
}

const input1 = {
  n: 5,
  r: 3,
};

const input2 = {
  n: 33,
  r: 19,
};

const { n, r } = input2;

console.log(solution(n, r));
