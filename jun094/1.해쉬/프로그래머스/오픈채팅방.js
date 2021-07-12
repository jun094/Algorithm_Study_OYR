const solution = (record) => {
    let answer = [];
    let hm = new Map();

    for (let line of record) {
        const [mode, uid, name] = line.split(' ');

        if (mode === 'Enter' || mode === 'Change') {
            hm.set(uid, name);
        }
    }

    for (let line of record) {
        const [mode, uid] = line.split(' ');

        if (mode === 'Enter') {
            answer.push(`${hm.get(uid)}님이 들어왔습니다.`);
        } else if (mode === 'Leave') {
            answer.push(`${hm.get(uid)}님이 나갔습니다.`);
        }
    }

    return answer;
};

solution(['Enter uid1234 Muzi', 'Enter uid4567 Prodo', 'Leave uid1234', 'Enter uid1234 Prodo', 'Change uid4567 Ryan']);
