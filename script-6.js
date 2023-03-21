let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]

// 1. Знайти суму та кількість позитивних елементів.
let number = 0;
let sum1 = 0;

arr.forEach(function(item){
    if (item > 0) {
        sum1 += item;
        number ++;
    }
})
console.log (sum1, number);


// 2. Знайти мінімальний елемент масиву та його порядковий номер.
let minValue = arr [0];
let minIndex = 0;

for (let i = 1; i< arr.length; i++){
    if (arr[i] < minValue) {
        minValue = arr [i];
        minIndex = i;
    }
}
console.log (minIndex, minValue);

// 3. Знайти максимальний елемент масиву та його порядковий номер.

let maxValue = arr [0];
let maxIndex1 = 0;

for (let i = 1; i < arr.length; i++){
    if (arr[i] > maxValue) {
        maxValue = arr [i];
        maxIndex1 = i;
    }
}
console.log (maxIndex1, maxValue);

// 4. Визначити кількість негативних елементів.

let minValue2 = 0;
arr.forEach(function (item){
    if (item < 0)
    minValue2 ++
}
);
console.log(minValue2);

// 5. Знайти кількість непарних позитивних елементів.

let minValue3 = 0;
arr.forEach(function (item){
    if (item > 0 && item % 3 === 0)
    minValue3 ++
}
);
console.log(minValue3);

// 6. Знайти кількість парних позитивних елементів.

let minValue4 = 0;
arr.forEach(function (item){
    if (item > 0 && item % 2 === 0)
    minValue4 ++
}
);
console.log(minValue4);

// 7. Знайти суму парних позитивних елементів.

let sum2 = 0;
let minValue5 = 0;
arr.forEach(function (item){
    if (item > 0 && item % 2 === 0)
    sum2 += item; 
}
);
console.log(sum2);

// 8. Знайти суму непарних позитивних елементів.

let sum3 = 0;
let minValue6 = 0;
arr.forEach(function (item){
    if (item > 0 && item % 3 === 0)
    sum3 += item;
}
);
console.log(sum3);

// 9. Знайти добуток позитивних елементів. 

let number7 = 1;

arr.forEach(function (item){
    if (item > 0){
    number7 *= item;
    }
}
);
console.log (number7);

// 10. Знайти найбільший серед елементів масиву, остальні обнулити.

let maxValue2 = arr [0];

for (let i = 1; i < arr.length; i++){
    if (arr[i] > maxValue2) {
        maxValue2 = arr [i];
    }
}
console.log (maxValue2);