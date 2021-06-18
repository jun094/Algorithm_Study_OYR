console.log("main.js");

function solution(coins, changes) {
  const n = coins.length;
  const dy = new Array(changes + 1).fill(changes);
  dy[0] = 0;
  for (let i = 0; i < n; i++) {
    for (let j = coins[i]; j <= changes; j++) {
      dy[j] = Math.min(dy[j], dy[j - coins[i]] + 1);
    }
  }

  return dy[changes];
}

const input = {
  coins: [1, 2, 5],
  changes: 15,
};

const { coins, changes } = input;

console.log(solution(coins, changes));
