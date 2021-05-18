console.log("main.js");

function solution(coins, change) {
  let answer = 99;
  const coinCounts = coins.length;
  const tmp = new Array(coinCounts).fill(0);

  function Calc(sum, depth) {
    // 최소 탈출 조건(?) 추가
    if (depth >= answer) return;
    if (sum >= change) {
      if (sum === change) {
        if (depth < answer) answer = depth;
      }
      return;
    }
    for (let i = 0; i < coinCounts; i++) {
      Calc(sum + coins[i], depth + 1);
    }
  }

  Calc(0, 0);

  return answer;
}

const input = {
  coins: [1, 2, 5],
  change: 15,
};

const { coins, change } = input;

console.log(solution(coins, change));
