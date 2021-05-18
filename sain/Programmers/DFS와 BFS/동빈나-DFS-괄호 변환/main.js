console.log("main.js");

// https://www.youtube.com/watch?v=Bc34h7xPTL8

function isCorrect(str) {
  const len = str.length;
  const stack = [];
  let left = 0;
  let right = 0;
  let correct = true;

  for (let i = 0; i < len; i++) {
    if (str[i] === "(") {
      left++;
      stack.push("(");
    } else {
      right++;
      if (!stack.length) {
        correct = false;
      } else {
        stack.pop();
      }
    }

    if (left === right) {
      return { slicePoint: i + 1, correct: correct };
    }
  }
  if (!stack.length) {
    return { slicePoint: str.length, correct: true };
  } else {
    return { slicePoint: str.length, correct: false };
  }
}

function solution(input) {
  let answer = "";

  function Correction(str) {
    if (!str.length) return str;
    const { slicePoint, correct } = isCorrect(str);
    const len = str.length;
    const u = str.slice(0, slicePoint);
    const v = str.slice(slicePoint, len);
    if (correct) {
      return u + Correction(v);
    }
    return `(${Correction(v)})${u
      .split("")
      .slice(1, u.length - 1)
      .map((c) => (c === "(" ? ")" : "("))
      .join("")}`;
  }

  answer = Correction(input);

  return answer;
}

const input1 = "(()())()";
const input2 = ")(";
const input3 = "()))((()";

console.log(solution(input3));
