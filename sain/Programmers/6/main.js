console.log("main.js");
//https://taesung1993.tistory.com/46

function solution(number, k) {
  let answer = 0;
  const arr = number.split("");
  const selected = [];
  const arrLen = arr.length;
  let cnt = k;

  for (let i = 0; i < arrLen; i++) {
    const num = arr[i];
    while (cnt > 0 && selected[selected.length - 1] < num) {
      selected.pop();
      cnt--;
    }

    selected.push(num);
  }
  selected.splice(selected.length - cnt, cnt);
  answer = selected.join("");
  return answer;
}

const input1 = { n: "1924", k: 2 };
const input2 = { n: "1231234", k: 3 };
const input3 = { n: "4177252841", k: 4 };

const { n, k } = input2;

console.log(solution(n, k));
