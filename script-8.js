// 1)Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

let inform = ['f', 't', 'e', 1, 2, 3, 5, 6, 5, 5, 5, 'f', 't', 'e', 5, 5, 5, ];

// варіант 1
let newInform = inform.filter(el => el !== 5);
console.log (newInform);

// варіант 2
function filterArray () {return (inform.filter(el => el !== 5))};
filterArray();

// 2)Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length. span>

// Варіант 1
let array = new Array(20).join().replace(/(.|$)/g, function(){return ((Math.random()*36)|0).toString(36);})
let newArray = array.split('', 10);
console.log (newArray);

// Варіант 2
let characters = "abcdefghijklmnopqrstuvwxyz0123456789";
let newCharacters = characters.split('', 10);
console.log (newCharacters);


// 3)Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 
//   'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

const test2=(str)=>{
    str = str.split(str2).join('');
    console.log(str); 
};

let str = prompt ('Ведіть фразу');
let str2 = prompt ('Ведіть символи для видалення')

test2(str);

//4)Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:

function number () {
    let counet = 3;
    return function() {
        return counet += counet;
    }
};

let count = number();

console.log (count());
console.log (count());
console.log (count());
console.log (count());
