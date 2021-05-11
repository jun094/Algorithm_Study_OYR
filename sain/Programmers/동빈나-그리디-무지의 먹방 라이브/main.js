console.log("main.js");

function PriorityQueue(elems, idx) {
  return elems.sort((a, b) => a[idx] - b[idx]);
}

function solution(food_times, k) {
  let answer = 0;
  let allFoodTimes = 0;
  let sum = 0;
  let prev = 0;
  let timesLength = food_times.length;
  for (let i = 0; i < timesLength; i++) allFoodTimes += food_times[i];

  if (allFoodTimes <= k) return -1;

  const priorityQueue = PriorityQueue(
    food_times.map((d, idx) => ({ foodTime: d, number: idx + 1 })),
    "foodTime"
  );

  while (sum + (priorityQueue[0].foodTime - prev) * timesLength <= k) {
    const currentFoodTime = priorityQueue.shift().foodTime;
    sum += (currentFoodTime - prev) * timesLength;
    timesLength -= 1;
    prev = currentFoodTime;
  }

  let target = k - sum + 1;
  const restLength = priorityQueue.length;
  let tmp = Math.floor((target - 1) / restLength);
  const result = priorityQueue.sort((a, b) => a.number - b.number);
  target -= tmp * restLength;

  answer = result[target - 1].number;

  return answer;
}

const input = {
  food_times: [3, 1, 2],
  k: 5,
};

const input1 = {
  food_times: [4, 2, 3, 6, 7, 1, 5, 8],
  k: 16,
};

const input2 = {
  food_times: [4, 2, 3, 6, 7, 1, 5, 8],
  k: 27,
};

const { food_times, k } = input;

console.log(solution(food_times, k));

///////////////////////////////////////////////////////////////////////////

function solution2(food_times, k) {
  let answer = -1;
  let allfood_times = 0;
  let idx = 0;
  let elapsedTime = 0;
  const timesLength = food_times.length;

  for (let i = 0; i < timesLength; i++) allfood_times += food_times[i];

  while (allfood_times > 0) {
    if (idx === timesLength) idx = 0;
    if (food_times[idx] > 0) {
      if (elapsedTime === k) {
        answer = idx + 1;
        break;
      }
      food_times[idx]--;
      elapsedTime++;
      allfood_times--;
      console.log(elapsedTime, idx + 1);
      console.log(food_times);
    }
    idx++;
  }

  return answer;
}
