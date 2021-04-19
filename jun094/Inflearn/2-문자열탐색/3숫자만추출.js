const solution = (str) => {
    const len = str.length;
    let stack = [];

    for (let i = 0; i < len; i++) {
        if (str[i] * 1 || str[i] * 1 === 0) stack.push(str[i]);
    }

    if (stack[0] === '0') stack.shift();
    return stack.join('');
};

let str = 'g0en2T0s8eSoft';
solution(str);
