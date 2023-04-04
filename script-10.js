// 1)Написать функцию которая будет возвращать уникальные значения в массиве
// Пример:
// const yourFunc = (arr) => {};
// const arr1 = [1,2,3,4,5,1,2,3,4,5]
// yourFunc(arr1) // [1,2,3,4,5]
// Должно работать с любыми значениями

// Варіант 1

const array = [1, 2, 4, 5, 'a', 'r', 't', 'd', 'f', 'e',  'a', 'f', 'd', 1, 1, 2, 3, 6, 7, 8, 5, 6, 7, 9];

const yourFunc = (arr) => {
    return arr.filter((el, ind) => ind === arr.indexOf(el));
};

console.log (yourFunc(array));

// Варіант 2 

const yourFunc2 = (array) => {
    return array.reduce((res, cur) => 
        res.find((find) => JSON.stringify(find) === JSON.stringify(cur)) ? res:[...res, cur], []);
    };
console.log (yourFunc2(array));

// 2) Напишите функцию которая принимает массив 
// целых чисел и вернет число которое встречается чаще всего, если таких чисел несколько результатом должно быть число которое встречается первым,

const array1 = [ 2, 4, 5, 2, 2, 6, 6, 6, 6, 6, 7, 9];

let g = [...new Set(array1)].map(i=>[i, array1.filter(f=>f==i).length]).sort((a,b)=>b[1]-a[1]);
let first = g[0]
console.log (first);


// 3) Что вернет выражение z(x) ?
// поверне 'undefind' оскільки функція "t" не вертає ні якого значення

let y = 5;
let x = () => y;
let z = t => {
  let y = 5;
  t();
};
z(x);

// 4) Результатом декоратора debounce(f, ms) должна быть обёртка, которая передаёт вызов f не 
// более одного раза в ms миллисекунд. Другими словами, когда мы вызываем debounce, это гарантирует, 
// что все остальные вызовы будут игнорироваться в течение ms.

function debounce(f, ms) {

    let isCooldown = false;
  
    return function() {
      if (isCooldown) return;
  
      f.apply(this, arguments);
  
      isCooldown = true;
  
      setTimeout(() => isCooldown = false, ms);
    };
  
  };

  setTimeout( () => f(3), 100); 
  setTimeout( () => f(4), 1100); 
  setTimeout( () => f(5), 1500); 