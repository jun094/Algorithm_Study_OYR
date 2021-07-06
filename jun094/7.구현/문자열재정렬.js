const solution = (str) => {
    let answer = '';
    let arr = str.split('');
    let sum = 0;

    arr.sort((a, b) => {
        if (a > b) return 1;
        else return -1;
    });

    for (let i of arr) {
        console.log(i, i * 1);
        if (i * 1 >= 0) {
            sum += i * 1;
        } else {
            answer += i;
        }
    }
    answer += String(sum);

    return answer;
};

solution('K1KA5CB7');
//solution('145213');
