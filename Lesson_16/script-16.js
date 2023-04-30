// Получить всех персонажей с помощью этого API - https://swapi.dev/api/people/
// Все 82 обьекта добавить в один массив, промапать что бы осталось только - name, mass, height, gender, films.
// отобразить персонажей которые появлялись больше чем в трех фильмах


let urls = ['https://swapi.dev/api/people/',
 "https://swapi.dev/api/people/?page=2",
 "https://swapi.dev/api/people/?page=3",
 "https://swapi.dev/api/people/?page=4",
 "https://swapi.dev/api/people/?page=5",
 "https://swapi.dev/api/people/?page=6",
 "https://swapi.dev/api/people/?page=7",
 "https://swapi.dev/api/people/?page=8",
 "https://swapi.dev/api/people/?page=9"
]; // записав всі urls в масив для обработки


let requests = urls.map((urls) => fetch(urls)); 

Promise.all(requests).then((responses) => {
    const newArr = responses.map((response) => response.json());
    console.log(newArr);
});




