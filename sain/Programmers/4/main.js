console.log("main.js");
// https://velog.io/@rud285/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%B9%B4%ED%8E%AB-javascript

function solution(brown, yellow) {
  let answer = [];

  for (let i = yellow; i >= 1; i--) {
    if (yellow % i === 0) {
      const yW = i; // 노란색 영역 가로길이
      const yH = yellow / i; // 노란색 영역 세로길이

      if (brown === 2 * yW + 2 * yH + 4) {
        answer = [yW + 2, yH + 2];
        break;
      }
    }
  }
  return answer;
}

const input1 = { brown: 10, yellow: 2 };
const input2 = { brown: 8, yellow: 1 };
const input3 = { brown: 24, yellow: 24 };

const { brown, yellow } = input1;

console.log(solution(brown, yellow));
