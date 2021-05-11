const solution = (arr) => {
    let ans = [];
    let len = arr.length;

    for (let i = 0; i < len; i++) {
        let cnt = len;

        for (let j = 0; j < len; j++) {
            if (i !== j && arr[i] >= arr[j]) {
                cnt--;
            }
        }

        ans.push(cnt);
    }
    return ans;
};

//let arr = [87, 92, 92, 100, 76];
//4  2  2  1   5

let arr = [87, 89, 92, 100, 76];

solution(arr);
