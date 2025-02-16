//#AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
// Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.

function cloner(obj) {
    if(obj){
        let functions =[]
        for (const objElement in obj) {
            if(typeof obj[objElement] === "function"){
                const functionClone =obj[objElement].bind({})
                functions.push({functionClone ,objElement})
            }
        }
        const s =JSON.stringify(obj)
        const parse = JSON.parse(s)
        for (const func of functions) {
            parse[func.objElement]=func.functionClone
        }
        return parse
    }
    throw new Error("ERROR")
}

let clone = (cloner({
    id: 123, name: 'gwen', great() {
        console.log("car")
    }, type() {
        console.log('type')
    }
}));
clone.type()


//#iz6emEsP2BA
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
// Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

console.log(coursesAndDurationArray.map((value, index) =>value.id= index + 1));
console.log(coursesAndDurationArray)
console.log(coursesAndDurationArray.map((value, index) => ({...value, id:index = +1})));