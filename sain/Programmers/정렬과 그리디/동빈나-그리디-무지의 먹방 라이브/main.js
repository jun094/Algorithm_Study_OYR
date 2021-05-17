console.log("main.js");

// function PriorityQueue(elems, idx) {
//   return elems.sort((a, b) => a[idx] - b[idx]);
// }

function solution(food_times, k) {
  let answer = 0;
  let allFoodTimes = 0;
  let idx = 0;
  let timesLength = food_times.length;
  const priorityQueue = [];
  for (let i = 0; i < timesLength; i++) {
    priorityQueue.push([food_times[i], i + 1]);
    allFoodTimes += food_times[i];
  }

  if (allFoodTimes <= k) return -1;

  priorityQueue.sort((a, b) => a[0] - b[0]);

  while (timesLength) {
    const diff =
      idx === 0
        ? priorityQueue[0][0]
        : priorityQueue[idx][0] - priorityQueue[idx - 1][0];

    console.log(diff);

    if (k > diff * timesLength) {
      k -= diff * timesLength;
    } else {
      const tmp = priorityQueue.slice(idx);
      tmp.sort((a, b) => a[1] - b[1]);
      answer = tmp[k % tmp.length][1];
      break;
    }
    idx++;
    timesLength--;
  }

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

const input3 = {
  food_times: [8, 6, 4],
  k: 15,
};

const { food_times, k } = input3;

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
