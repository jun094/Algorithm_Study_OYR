let map = new Map();

let number = 0;
let str = 'string';
let obj = { a: 1 };
let fnc = () => {
    console.log('fnc');
};

map.set(number, 0); //key에 number 가능
map.set(str, 1); // key에 string 가능
map.set(obj, 2); //key에 object 가능
map.set(fnc, 3); // key에 함수 가능
map.set(number, 4); // 덮어쓰기 가능

map.get(str); // 1
map.get(obj); // 2
map.get('none'); // undefined
map.get({ a: 1 }); // undefined, obj !== { a: 1 }
