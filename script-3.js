let user = confirm("Можно використовувати Ваші дані?");
alert(user);

if (user === true) {
    let allInfo = { 
        firstName : prompt ('Ваше імя?'),
        secondName : prompt ('Ваше призвище?'),
        age : +prompt ('Ваш вік?'),
        city : prompt ('Місто?'),
    };

    alert(`Інформація про Вас 
        ${allInfo.firstName}, 
        ${allInfo.secondName}, 
        ${allInfo.age},
        ${allInfo.city}`);}

else {
    alert(`Вибачте за незручності. Гарного дня!`) 
};


