String.prototype.replaceAll = function (from, to) {
    if (from instanceof RegExp)
        if (!from.flags.includes) throw new TypeError('replaceAll must be called with a global RegExp');
        else return this.replace(from, to);
    else return this.replace(new RegExp(from.replace(/[\\^$*+?.():=!|{},\[\]]/g, '\\$&'), 'g'), to);
};

const replaceAll = (str, searchStr, replaceStr) => {
    return str.split(searchStr).join(replaceStr);
};

//출처: https://bbaktaeho-95.tistory.com/40 [Bbaktaeho]
const arr = [5, 6, 9, 1, 6, 3, 2, 1, 2, 7, 9, 4, 3];
const search = 9;
const searchResult = [];
let index = arr.indexOf(search);
while (index != -1) {
    searchResult.push(index);
    index = arr.indexOf(search, index + 1);
}
console.log(searchResult);
