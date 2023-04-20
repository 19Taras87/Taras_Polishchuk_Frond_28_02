//1)Найдите числа которые повторяются нечетное количество раз в массиве
//solution([12, 23, 34, 12, 12, 23, 12, 45]) -> [34 45]
//solution([4, 4, 100, 5000, 4, 4, 4, 4, 4, 100, 100,]) -> [4 100 5000]
//solution([3, 3, 4, 6, 4, 5, 9, 9, 21, 9]) -> [6 5 9 21]
//solution([4, 8, 15, 16, 23, 42, 4, 15, 42, 42]) -> [8 16 23 42]
//solution([2, 2, 44, 44]) => []

function solutionFilter (arr) {
    let count = {};
    for (const elem of arr) {
        count[elem] ? count[elem]++ : (count[elem] =1);
    }
    let uniArr = Object.keys(count);
    let ArrayStr = uniArr.filter (
        (element) => count[element] % 2 !==0
    );
    let countArrInt = ArrayStr.map((element) => parseInt(element));
    return countArrInt
}

console.log (solutionFilter ([2, 2, 44, 44]));

// 2

function ezjQuery (tag) {
    this.firstTag = `<${tag}></${tag}>`;

    this.add = function (newTag, text = null) {
        let dateTag;
        if (!text) {
            dateTag = `<${newTag}></${newTag}>`;
        } else {
            dateTag = `<${newTag}>${text}</${newTag}>`;
        }
        this.firstTag = this.firstTag.replace(`></`, `>${dateTag}</`);
        return this;
    };
    this.render = function () {
        let renderTag = this.firstTag;
        this.firstTag = `<${tag}></${tag}>`;
        return renderTag;
    };
}

const textExample = new ezjQuery("body").add("ul").add("ul","hello").render();
const textExample2 = new ezjQuery ("body").add("div").render();
console.log (textExample2);