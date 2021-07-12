const solution = (s) => {
    let stack = [s[0]];
    const n = s.length;

    if (n % 2 !== 0) return 0;

    for (let i = 1; i < n; i++) {
        if (stack.length === 0) {
            stack.push(s[i]);
        } else {
            let top = stack.pop();

            if (top === s[i]) {
                continue;
            } else {
                stack.push(top);
                stack.push(s[i]);
            }
        }
    }

    if (stack.length === 0) return 1;
    else return 0;
};

solution('caabaa');
