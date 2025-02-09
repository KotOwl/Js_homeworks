// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function triangleArea(a, b) {
    return a * b / 2
}

console.log(triangleArea(4, 5))

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circleArea(r) {
    return 3.14 * (r ** 2)
}

console.log(circleArea(4))

//#Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinderArea(r, h) {
    return 2 * 3.14 * r(r + h)
}

console.log(circleArea(3, 5))

//#SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
function masOutput(array) {
    for (let arrayElement of array) {
        console.log(arrayElement)
    }
}

let mas = [1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 11, 1, 1]
masOutput(mas)

//#59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
function paragraf(text) {
    document.write(`<p>${text}</p>`)
}

paragraf("Gwen is immune")

//#hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий

function li(text) {
    document.write(`
    <ul>
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
    </ul>
    `)
}

li("Gwen is immune")

//#gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write

function li_for_mas(array) {
    document.write(`<ul></ul>`)
    for (let arrayElement of array) {
        document.write(`<li>${arrayElement}</li>`)
    }
    document.write(`<ul></ul>`)
}

li_for_mas(mas)

//#bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function user_block(array_of_object) {
    document.write(`<div class="users-box">`)
    for (const users of array_of_object) {
        document.write(`<div class="user-block">
        <h2>${users.id} - ${users.name} - ${users.age} </h2>
        </div>`)
    }
    document.write(`</div>`)
}

let users = [
    {name: 'vasya', age: 31, id: 1},
    {name: 'petya', age: 30, id: 1},
    {name: 'kolya', age: 29, id: 1},
    {name: 'olya', age: 28, id: 1},
    {name: 'max', age: 30, id: 1},
    {name: 'anya', age: 31, id: 1},
    {name: 'oleg', age: 28, id: 1},
    {name: 'andrey', age: 29, id: 1},
    {name: 'masha', age: 30, id: 1},
    {name: 'olya', age: 31, id: 1},
    {name: 'max', age: 31, id: 1}
];
user_block(users)

//#pghbnSB
// - створити функцію яка повертає найменьше число з масиву
function min(array){
    let min = array[0]
    for (let i = 0; i < array.length; i++) {
        if (min > array[i]){
            min= array[i]
        }
    }
    return min
}
let mas_int =[3,2,4,21,1,5,3,13,41,2,1,8,4]
console.log(min(mas_int))

//#EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum (array){
    let sum =0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum
}
console.log(sum(mas_int))

//#kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(array,position1,position2){
    let variable = array[position1]
    array[position1]=array[position2]
    array[position2]=variable
    return array
}
console.log(swap(mas_int,1,2))

//#mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
function exchange(sumUAH,currencyValues,exchangeCurrency){
    for (let currency of currencyValues) {
        if (currency.currency === exchangeCurrency){
            return  sumUAH/currency.value

        }

    }
}
let test =[{currency:'USD',value:25},{currency:'EUR',value:42}]
console.log(exchange(10000,test,'USD'))