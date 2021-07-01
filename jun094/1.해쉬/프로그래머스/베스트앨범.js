const solution = (genres, plays) => {
    const n = genres.length;
    let answer = [];

    let songs = []; // songs obj 정보
    let hm = new Map(); // 장르별 total play 수를 저장할 map
    let sort_hm = new Map(); // play 수가 내림차순 정렬된 arr

    //장르, 고유번호, play수 정보 저장
    for (let i = 0; i < n; i++) {
        songs.push({
            genre: genres[i],
            play: plays[i],
            no: i,
        });
    }

    //장르별 total Play수 저장
    for (let i = 0; i < n; i++) {
        let g = genres[i];
        let p = plays[i];

        if (hm.get(g) === undefined) {
            hm.set(g, p);
        } else {
            hm.set(g, hm.get(g) + p);
        }
    }

    // total Play수 정렬
    hm = new Map([...hm.entries()].sort((a, b) => b[1] - a[1]));

    // 장르에 정렬을 위한 숫자값(total_plays수) 저장
    for (let i = 0; i < n; i++) {
        songs[i].genre = hm.get(songs[i].genre);
    }

    // genre->play->no 순으로 정렬
    songs.sort((a, b) => {
        if (a.genre !== b.genre) return b.genre - a.genre;
        else if (a.play !== b.play) return b.play - a.play;
        else return a.no - b.no;
    });

    //2개씩 베스트 앨범 생성
    let cnt = 0;
    let prev_genre = songs[0].genre;

    for (let i = 0; i < n; i++) {
        console.log(cnt);

        if (cnt < 2 && prev_genre === songs[i].genre) {
            answer.push(songs[i].no);
            cnt++;
        } else if (prev_genre !== songs[i].genre) {
            cnt = 1;
            prev_genre = songs[i].genre;
            answer.push(songs[i].no);
        }

        //console.log(JSON.parse(JSON.stringify(answer)));
    }
    //window.hm = hm;
    //window.songs = songs;
    return answer;
};
solution(['classic', 'pop', 'classic', 'classic'], [800, 19600, 150, 800]);
