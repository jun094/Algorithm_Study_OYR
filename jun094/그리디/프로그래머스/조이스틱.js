const minUpDown = (c) => {
    const code = c.charCodeAt();
    let cnt = 0;

    if (code < 78) cnt = code - 65;
    else cnt = 91 - code;

    return cnt;
};

const repeatA = (arr, idx) => {
    const len = arr.length;
    let fin = 0; // 방향 전환 후, 어디까지 갈 지 결정할 변수
    let cnt = 0; // 'A' 개수 count

    for (let i = idx; i < len; i++) {
        if (arr[i] === 'A') {
            cnt++;
        } else {
            fin = i;
            i = len;
        }
    }
    return [cnt, fin];
};

const minLeftRight = (arr) => {
    const len = arr.length;
    let i = 0;
    let next = 1;
    let fin = len;
    let count = 0;
    ㄴ;
    while (i !== fin) {
        //up&down 개수 세기

        // 'A' 아닌 경우에는, 알파벳 'N' 기준으로 업&다운
        if (arr[i] !== 'A' && arr[i] !== 'a') {
            count += minUpDown(arr[i]);

            console.log(arr[i], minUpDown(arr[i]));
        }

        //'A' 만나면 최소 길이 체크
        if (next === 1 && arr[i + 1] === 'A') {
            const arrA = repeatA(arr, i + 1);
            const numA = arrA[0];

            // 방향이 오른쪽이면서, 연속된 'A' 개수가 현재 위치보다 더 크면
            if (numA > i) {
                next = -1; //방향 왼쪽으로 전환
                fin = arrA[1];
            }
        }

        i += next; //옆으로 이동
        if (i === -1) i = len - 1; //첫번째 원소에서 왼쪽으로 이동하면 마지막으로 이동
        count++;
    }

    return count;
};

const solution = (str) => {
    const arr = str.split('');

    console.log('최소거리 ', minLeftRight(arr));
};

let str = 'JAZ';
solution(str);
