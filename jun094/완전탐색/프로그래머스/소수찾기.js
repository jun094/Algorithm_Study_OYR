const primeNumber = (num) => {
    let half = 0;

    if (num === 1 || num === 0) {
        return false;
    } else if (num !== 2 && num % 2 === 0) {
        return false;
    } else {
        half = Math.sqrt(num);

        for (let i = 2; i <= half; i++) {
            if (num % i === 0) {
                //console.log(i)
                return false;
            }
        }
        return true;
    }
};

const solution = (str) => {
    const arr = str.split('');
    let ans = 0;
    let combineArr = [];
    let len = 0;

    const numRecursion = (firstStr, remainArr) => {
        const length = remainArr.length;

        if (length === 0) return; //재귀함수 탈출조건

        for (let i = 0; i < length; i++) {
            const secondStr = remainArr.shift(); // 배열 제거할 원소 반환 후, 나머지만
            const combineStr = firstStr + secondStr;
            const num = Number(combineStr);

            combineArr.push(num);

            numRecursion(combineStr, remainArr);

            remainArr.push(secondStr);
        }
    };
    numRecursion('', arr);
    combineArr = Array.from(new Set(combineArr)); // 중복제거

    len = combineArr.length;
    for (let i = 0; i < len; i++) {
        if (primeNumber(combineArr[i])) {
            ans++;
        }
    }

    return ans;
    console.log(ans);
};

let str = '011';
solution(str);
