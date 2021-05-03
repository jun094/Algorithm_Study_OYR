console.log("main.js");

function solution(input) {
  let answer = "YES";
  const [comp1, comp2] = input;
  const inputLen1 = comp1.length;
  const inputLen2 = comp2.length;
  const mapped1 = {};
  const mapped2 = {};

  for (let i = 0; i < inputLen1; i++) {
    if (!mapped1[comp1[i]]) mapped1[comp1[i]] = 0;
    mapped1[comp1[i]]++;
  }

  for (let i = 0; i < inputLen2; i++) {
    if (!mapped2[comp2[i]]) mapped2[comp2[i]] = 0;
    mapped2[comp2[i]]++;
  }

  const mappedKeys1 = Object.keys(mapped1);
  const mappedLen1 = mappedKeys1.length;
  const mappedKeys2 = Object.keys(mapped2);
  const mappedLen2 = mappedKeys2.length;

  for (let i = 0; i < mappedLen1; i++) {
    const key = mappedKeys1[i];
    if (!mapped1[key] || !mapped2[key] || mapped1[key] !== mapped2[key]) {
      answer = "NO";
      break;
    }
  }

  for (let i = 0; i < mappedLen2; i++) {
    const key = mappedKeys2[i];
    if (!mapped1[key] || !mapped2[key] || mapped1[key] !== mapped2[key]) {
      answer = "NO";
      break;
    }
  }

  return answer;
}

const input1 = ["AbaAeCe", "baeeACA"];
const input2 = ["abaCC", "Caaab"];

console.log(solution(input1));
