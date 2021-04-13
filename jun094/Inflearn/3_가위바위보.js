const solution = (a, b) => {
    //1 < 2
    //2 < 3
    //3 < 1
    let ans = [];
    let len = a.length;

    for (let i = 0; i < len; i++) {
        if (a[i] === 3 && b[i] === 1) {
            a[i] = 0;
        } else if (a[i] === 1 && b[i] === 3) {
            b[i] = 0;
        }

        if (a[i] > b[i]) {
            ans.push('A');
        } else if (a[i] < b[i]) {
            ans.push('B');
        } else {
            ans.push('D');
        }
    }

    console.log(ans);
};

let a = [2, 3, 3, 1, 3, 1];
let b = [1, 1, 2, 2, 3, 3];
// a  b  a  b  d  a
solution(a, b);
