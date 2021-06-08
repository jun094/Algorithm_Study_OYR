const solution = (s) => {
    let answer = 99999;
    let len = s.length;

    if (len === 1) return 1;

    const makeCompression = (str, n) => {
        let idx = 0;
        let cnt = 1;
        let new_str = '';
        //let len = str.length;
        while (idx < len) {
            let target = str.substr(idx, n);
            let next_target = str.substr(idx + n, n);

            if (target === next_target) {
                cnt++;
            } else {
                if (cnt >= 2) {
                    new_str += cnt + target;
                    cnt = 1;
                } else {
                    new_str += target;
                }
            }

            //console.log(target, next_target, cnt);
            idx += n;
        }

        //console.log(idx, new_str);

        new_str += str.slice(idx);

        return new_str;
    };
    for (let unit = 1; unit <= len / 2; unit++) {
        let compression_str = makeCompression(s, unit);
        let compression_len = compression_str.length;

        //console.log(unit, compression_str, compression_len);
        answer = answer > compression_len ? compression_len : answer;
    }

    return answer;
};
