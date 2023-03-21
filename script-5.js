// 1. Вивести в консоль в один рядок через кому числа від 10 до 20.

let number = '';

for ( let x = 10; x <= 20 && x >= 10; x++ ) {
    number += x + ','
};
console.log (number)

// 2. Вивести в консоль в один рядок через кому квадрати чисел від 10 до 20.

let number2 = '';

    for ( let y = 10; y <= 20 && y >= 10; y++ ) {
        let i = Math.pow (y, 2);
        number2 += i + ','
    };
console.log (number2);

// 3. Знайти добуток усіх цілих чисел від 15 до 35.

let x = 1;

    for ( let a = 15; a <= 35 && a >= 15; a++ ) {
        x *= a;
    };
    console.log (x);

// 4. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

let number3=0;
let b=0;

    for( let c = 1; c < 500; c++){
        number3 += c
        b += 1
    }
console.log(number3/b);

// 5. Вивести суму лише парних чисел в діапазоні від 30 до 80.

let number4 = '';
let sum = 0; 

    for ( let y = 30; y <= 80 && y >= 30; y++ ) {
        if (y % 2 === 0) {
           sum += y
        }
    };
console.log (sum);

// 6. Вивести всі числа в діапазоні від 100 до 200 кратні 3.

let number5 = '';

    for ( let z = 100; z <= 200 && z >= 100; z++ ) {
        if (z % 3 === 0) {
            number5 += z + ','  
        }
    };
console.log (number5);

// 7. Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

let number6 = prompt ('Ведіть число')

    if (number6 % 2 === 0){
        alert ('складне число')
    }
    for ( let v = 3; v*v<=number6; v+=2){
        if (number6%v === 0){
            alert ('складне число')
        }
    }
console.log (number6);