console.log("main.js");
// https://velog.io/@diddnjs02/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EA%B5%AC%EB%AA%85%EB%B3%B4%ED%8A%B8

function solution(people, limit) {
  let answer = 0;
  let sorted = people.sort((a, b) => b - a);
  let fwd = 0;
  let bwd = sorted.length - 1;

  while (fwd < bwd) {
    // 가장 무거운 사람과 가벼운 사람을 합산
    let weight = sorted[fwd] + sorted[bwd];
    // 합산이 제한 하중을 넘어간 경우 첫번째 사람 배 태워서 보내고 다음 큰 사람 선택
    if (weight > limit) {
      fwd++;
    }
    // 합산이 제한 하중 내인 경우 둘 다 배를 태워 보내고 다음 큰 사람과 작은 사람 선택
    else {
      fwd++;
      bwd--;
    }
    answer++;
  }

  // 마지막 남은 한 사람이 있다면 그 사람 배 태워 보냄
  if (fwd === bwd) answer++;
  return answer;
}

const input1 = { people: [70, 50, 80, 50], limit: 100 };
const input2 = { people: [70, 80, 50], limit: 100 };
const input3 = { people: [40, 50, 60, 90], limit: 240 }; // 1
const input4 = { people: [40, 50, 60, 80], limit: 240 }; // 1

const { people, limit } = input2;

console.log(solution(people, limit));
