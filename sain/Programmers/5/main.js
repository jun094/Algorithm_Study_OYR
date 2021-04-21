console.log("main.js");

// 현재 바꿀려는 인덱스
let currentCursor = 0;

// 상하 조작 횟수
function alphabetChanges(char) {
  // 중간 단어인 N(78) 기점으로 작으면 정방향, 크면 역방향 탐색 (Z 부터)
  const curCode = char.charCodeAt();
  if (curCode < 78) return curCode - 65;
  else return 91 - curCode;
}

// 좌 또는 우
function movementChanges(mappedName) {
  // 정방향 탐색 횟수
  let fCnt = 0;
  // 역방향 탐색 횟수
  let bCnt = 0;
  // 정방향 탐색 인덱스
  let fIdx = 0;
  // 역방향 탐색 인덱스
  let bIdx = 0;
  // 전체 탐색 횟수
  let totalSearch = 0;
  const length = mappedName.length;

  // find forward
  fIdx = currentCursor;
  while (totalSearch < length) {
    if (fIdx >= length) fIdx = 0;
    // 변경이 필요한 경우만 중지
    if (!mappedName[fIdx].changed) break;
    fCnt++;
    fIdx++;
    totalSearch++;
  }
  totalSearch = 0;
  // find reverse
  bIdx = currentCursor;
  while (totalSearch < length) {
    if (bIdx < 0) bIdx = length - 1;
    // 변경이 필요한 경우만 중지
    if (!mappedName[bIdx].changed) break;
    bCnt++;
    bIdx--;
    totalSearch++;
  }

  // 정방향 역방향 횟수 중 가장 적은 수의 방향을 선택하여 이동 및 변경 횟수 합산
  // (fcnt <= bCnt 에서 <= 조건일 땐 통과하고 < 조건일 땐 마지막 11번 케이스가 통과하지 못합니다. 아래 링크 참고 바람)
  // https://jun-choi-4928.medium.com/programmers-level2-%EC%A1%B0%EC%9D%B4%EC%8A%A4%ED%8B%B1-6a82c0c3a6a7
  if (fCnt <= bCnt) {
    currentCursor = fIdx;
    mappedName[fIdx].changed = true;
    return alphabetChanges(mappedName[fIdx].ch) + fCnt;
  } else {
    currentCursor = bIdx;
    mappedName[bIdx].changed = true;
    return alphabetChanges(mappedName[bIdx].ch) + bCnt;
  }
}

function solution(name) {
  let answer = 0;
  let mappedName = name
    .split("")
    .map((d) => ({ ch: d, changed: d === "A" ? true : false }));

  while (mappedName.filter((d) => d.changed === false).length) {
    answer += movementChanges(mappedName);
  }

  return answer;
}

const name1 = "BBAABAAA";
const name2 = "ABAAAAABAB";

console.log(solution(name2));
