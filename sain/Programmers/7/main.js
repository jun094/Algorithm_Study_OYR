console.log("main.js");
// https://velog.io/@diddnjs02/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EA%B5%AC%EB%AA%85%EB%B3%B4%ED%8A%B8

/**
 * 요놈은 시간초과됨...
 *  https://akh95123.blogspot.com/2019/10/javascript_14.html
 */
function solution(people, limit) {
  let sorted = people.filter((d) => d < limit).sort((a, b) => b - a);
  let answer = people.length - sorted.length;

  while (sorted.length) {
    const selected = sorted.pop();
    const idx = sorted.findIndex((d) => d + selected <= limit);

    if (idx !== -1) {
      sorted.splice(0, idx + 1);
      answer += idx + 1;
    } else {
      answer += sorted.length + 1;
      break;
    }
  }

  return answer;
}
// 90 60 40 50
//  0  1  2
const input1 = { people: [70, 50, 80, 50], limit: 100 };
const input2 = { people: [70, 80, 50], limit: 100 };
const input3 = { people: [40, 50, 60, 90], limit: 240 }; // 1
const input4 = { people: [40, 50, 60, 80], limit: 240 }; // 1
const input5 = { people: [160, 150, 140, 60, 50, 40], limit: 200 };

const { people, limit } = input5;

console.log(solution(people, limit));
