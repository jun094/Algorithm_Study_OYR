const solution = (arr, horse) => {
    arr.sort();

    const n = arr.length;
    let answer = 0;
    let lt = 1;
    let rt = arr[n - 1];

    const checkHorse = (lt, rt, dist) => {
        let cnt = 1;
        let ep = arr[0]; // 1

        for (let i = 1; i < n; i++) {
            if (arr[i] - ep >= dist) {
                cnt++;
                ep = arr[i];
            }
        }
        return cnt;
    };

    while (lt <= rt) {
        let mid = Math.floor((lt + rt) / 2);
        let cnt = checkHorse(lt, rt, mid);

        //console.log(lt, rt, mid);
        //console.log(cnt);
        if (cnt < horse) {
            rt = mid - 1;
        } else {
            answer = mid;
            lt = mid + 1;
        }
    }

    return answer;
};

const horse = 3;
const arr = [1, 2, 8, 4, 9];

solution(arr, horse);
