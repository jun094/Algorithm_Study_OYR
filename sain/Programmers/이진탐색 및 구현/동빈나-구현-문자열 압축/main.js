console.log("main.js");

function solution(input) {
  const size = input.length;
  let answer = size;
  let unit = 1;

  while (unit < size) {
    let str = input;
    let unitCnt = 1;
    let lastUnitStr = "";
    let resultStr = "";
    while (str.length) {
      const unitStr = str.substr(0, unit);
      if (lastUnitStr.length) {
        if (unitStr === lastUnitStr) {
          unitCnt++;
        } else {
          resultStr += unitCnt > 1 ? `${unitCnt}${lastUnitStr}` : lastUnitStr;
          unitCnt = 1;
        }
      }
      lastUnitStr = unitStr;
      str = str.substring(unit, str.length);
      if (!str.length)
        resultStr += unitCnt > 1 ? `${unitCnt}${lastUnitStr}` : lastUnitStr;
    }
    const resLength = resultStr.length;
    if (answer > resLength) {
      answer = resLength;
    }
    unit++;
  }

  return answer;
}

const input1 = "aabbaccc";
const input2 = "ababcdcdababcdcd";
const input3 = "abcabcdede";
const input4 = "abcabcabcabcdededededede";
const input5 = "xababcdcdababcdcd";

console.log(solution(input1));
