console.log("main.js");

function solution(absolutes, signs) {
  let answer = 0;
  const arrLen = absolutes.length;

  for (let i = 0; i < arrLen; i++) {
    switch (signs[i]) {
      case true:
        answer += absolutes[i];
        break;
      default:
        answer -= absolutes[i];
        break;
    }
  }

  return answer;
}

const input1 = {
  absolutes: [4, 7, 12],
  signs: [true, false, true],
};

const input2 = {
  absolutes: [1, 2, 3],
  signs: [false, false, true],
};

const { absolutes, signs } = input1;

console.log(solution(absolutes, signs));
