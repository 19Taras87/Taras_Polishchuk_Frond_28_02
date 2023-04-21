//1)Напишите функцию.На вход функции подаётся список строк и нужно 
//найти общий для всех этих строк префикс максимальной длины. 
//Например, для списка ["programming", "product", "procrastination"] — ответом будет "pro"

/* const world = prompt('Ведіть список строку'); */

let arr = [ 
  "programming",
  "product",
  "procrastination"
];

function compare(inStr, cStr) { 
  let result = inStr.split('').filter(function(letter) {
    return (cStr.indexOf(letter) > -1);
  });
  return result;
}

for (i = 0; i < (arr.length-1); i++) { 
  var result = (i == 0) ? compare(arr[i], arr[i+1]) : compare(result.join(''), arr[i+1]);
}

let finalStr = Array.from(new Set(result)).join(''); 

alert(finalStr);


// 2)Напишите функцию которая превращает массив двухмерных массивов в массив трехмерных и наоборот.Остаток добавляется в новый массив

//Input: [[1,2], [3,4], [5,6]]
//Output: [[1,2,3], [4,5,6]]

//Input: [[1,2], [3,4], [5,6], [7]]
//Output: [[1,2,3], [4,5,6], [7]]

let Input = [[1,2], [3,4], [5,6], [7]];

function unflat(src, count) {
    const result = [].concat(...Input);
    for (let s = 0, e = count; s < src.length; s += count, e += count)
        result.push(src.slice(s, e));
    return result;
}

console.log(unflat(Input, 3));

//Input: [[1,2,3], [4,5,6]] 
//Output: [[1,2], [3,4], [5,6]]

const arr3 = [[1,2,3], [4,5,6]];
let array = [].concat(...arr3); 
let size = 2; //размер подмассива
let subarray = []; //массив в который будет выведен результат.
for (let i = 0; i <Math.ceil(array.length/size); i++){
    subarray[i] = array.slice((i*size), (i*size) + size);
}
console.log(subarray);


//const arr = [[1,2,3], [4,5,6]]
//yourFunc(arr, 5) --> [[1,2,3,4,5], [6]]

const arr2 = [[1,2,3], [4,5,6]];
let array2 = [].concat(...arr2); 
let size1 = 5; //размер подмассива
let subarray1 = []; //массив в который будет выведен результат.
for (let i = 0; i <Math.ceil(array2.length/size); i++){
    subarray1[i] = array2.slice((i*size1), (i*size1) + size1);
}
console.log(subarray1);