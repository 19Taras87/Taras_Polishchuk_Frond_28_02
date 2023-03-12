let number1 = prompt(`Ведіть число!`);
let number2 = prompt(`Ведіть ще одне число!`);

if (number1 == false) {
    number1 = 0
};

if (number2 == false) {
    number2 = 22
};

/* alert(number1);
alert(number2); */

let number3 
    if (number1 || number2 === true) {
        number3 = 80
    }else {
        number3 = 40
    };
/* alert(number3); */

const emptyObject = {}
    if (number1 >= 90){
        emptyObject.size = 'big'
    }else if (number1 <= 40){
        emptyObject.size = 'small'
    }else {
        emptyObject.size = 'medium'
    };

let number4;
    switch (emptyObject.size){
        case 'big': 
        number4 = 1000;
            break;
        case 'medium': 
        number4 = 100;
            break;
        case 'small': 
        number4 = 10;
            break;
    }
/* alert(number4); */

let result = number1*number2*number3*number4;

    if (result % 2 != 0){
        alert('All good!')
    }else if(number2 >=50){
        alert(number2)
    };

console.log(result);



