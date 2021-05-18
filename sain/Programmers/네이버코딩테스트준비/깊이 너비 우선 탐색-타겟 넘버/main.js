console.log("main.js");
// https://velog.io/@noyo0123/%ED%83%80%EA%B2%9F-%EB%84%98%EB%B2%84-javascript-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4

function solution(numbers, target) {
  let answer = 0;
  const arrLen = numbers.length;

  function subset(i, sum) {
    if (i === arrLen) {
      if (sum === target) answer++;
      return;
    }

    subset(i + 1, sum + numbers[i]);
    subset(i + 1, sum - numbers[i]);
  }

  subset(0, 0);

  return answer;
}

const input1 = {
  target: 3,
  numbers: [1, 1, 1, 1, 1],
};

const { target, numbers } = input1;

console.log(solution(numbers, target));
