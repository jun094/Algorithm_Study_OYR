const solution = (food_times, k) => {
    let answer = 0;
    let kinds = food_times.length; //음식 종류
    let sum = 0;
    let arr = [];

    for (let i = 0; i < kinds; i++) {
        arr.push([food_times[i], i + 1]);
        sum += food_times[i];
    }

    if (sum <= k) return -1;
    //총개수보다 k가 더 큰 경우, 더 섭취할 음식이 없으므로 -1

    arr.sort((a, b) => a[0] - b[0]);
    arr.unshift([0, 0]);

    let idx = 1;
    while (kinds) {
        let dist = arr[idx][0] - arr[idx - 1][0];

        if (k > dist * kinds) {
            k -= dist * kinds;
        }

        //남은 시간(k)이 남은 음식 종류보다 작을 때는 일일히 조회해야함 !
        else {
            let tmp = arr.slice(idx);

            tmp.sort((a, b) => a[1] - b[1]);
            //console.log(tmp);

            //console.log(k % tmp.length);
            answer = tmp[k % tmp.length][1];
            break;
        }

        idx++;
        kinds--;
    }

    return answer;
};

let arr = [8, 6, 4];
let k = 15;

//let arr = [4,2,3,6,7,1,5,8];
//let k = 27; //5
//let k = 16; //3

solution(arr, k);
