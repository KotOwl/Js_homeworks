'use strict'
//1. Створити пустий масив та :
//        a. заповнити його 50 парними числами за допомоги циклу.
//        b. заповнити його 50 непарними числами за допомоги циклу.
//        c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
//        d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

//a
let j = 0
let i =0
let arry_numb = []
// for (let i = 0; i < 50; ) {
//     if (j % 2 === 0){
//         arry_of_even_numb[i]=j
//         console.log(arry_of_even_numb[i])
//         i++
//         j++
//
//     }
//     else j++
// }
while (i<50){
    if (j % 2 === 0){
        arry_numb[i]=j
        console.log(arry_numb[i])
        i++
        j++

    }
    else j++
}
j = 0

//b
while (i<100){
    if (j % 2 !== 0){
        arry_numb[i]=j
        console.log(arry_numb[i])
        i++
        j++

    }
    else j++
}
//c

for (let k = 100; k < 120; k++) {
    arry_numb[k] = Math.floor(Math.random() * 100) + 1


}
//d

for (let k = 120; k < 140; k++) {
    arry_numb[k] = Math.floor(Math.random() * 732) + 8


}

//2. Вивести за допомогою console.log кожен третій елемен
for (let k = 0; k < arry_numb.length; k++) {
    if (k % 3 ===0){
        console.log(arry_numb[k])
    }
}
for (let k = 0; k < arry_numb.length; k++) {
    if((k % 3 ===0) && (arry_numb[k] % 2) === 0 ){
        console.log(arry_numb[k])
    }

}

//4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
j = 0
let new_mas=[]
for (let k = 0; k < arry_numb.length; k++) {
    if((k % 3 ===0) && (arry_numb[k] % 2) === 0 ){
        console.log(arry_numb[k])
        new_mas[j]=arry_numb[k]
        j++
    }

}
//5. Вивести кожен елемент масиву, сусід справа якого є парним
let test_array = [1,3,5,4,6,7,2,8,4,5,6,7,9]
for (let k = 0; k < arry_numb.length; k++) {
    if( (arry_numb[k+1] % 2) === 0 ){
        console.log(arry_numb[k])

    }

}
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let check =[100,250,50,168,120,345,188]
let hole_price = 0
for (let k = 0; k < check.length; k++) {
    hole_price += check[k]
}
let aver_price = hole_price / check.length
console.log(aver_price)

//7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let mas_for_rand =[]
for (let k = 0; k <30 ; k++) {
    mas_for_rand[k]=Math.floor(Math.random()*1000)+1
    // console.log(mas_for_rand[k])
}
let mas_for_rand_x5 =[]
for (let k = 0; k <mas_for_rand.length ; k++) {
    mas_for_rand_x5[k] = (mas_for_rand[k]) * 5
    console.log(mas_for_rand_x5[k])
}

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
j=0
let mas = [1,2,"3",4,true ,false,'4',6,'boolean',9,false,6,'true',0]
let mas_new =[]
for (let k = 0; k < mas.length; k++) {
    if (typeof(mas[k]) === "number" ){
        new_mas[j] = mas[k]
        console.log(new_mas[j])
        j++
    }
}

//- Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:
// let usersWithCities = [
//     {
//         id: 1, // <===
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1, // <===
//             country: 'Ukraine',
//             city: 'Ternopil'
//         }
//     },
//     // TO BE CONTINUED .....
// ]
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
let usersWithCities = [
    {
        id: 1, // <===
        name: 'vasya',
        age: 31,
        status: false,
        address: {
            user_id: 1, // <===
            country: 'Ukraine',
            city: 'Ternopil'
        }
    },
    {
        id: 2,
        name: 'petya',
        age: 30,
        status: true,
        address:{user_id: 2,
            country: 'Poland',
            city: 'Krakow'
        }
    },
    {
        id: 3,
        name: 'kolya',
        age: 29,
        status: true,
        address: {
            user_id: 2,
            country: 'Poland',
            city: 'Krakow'
        },


    },
    {
        id: 4,
        name: 'olya',
        age: 28,
        status: false,
        address:{
            user_id: 4,
            country: 'USA',
            city: 'Miami'
        }

    }

];
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

let mas_of =[1,11,22,33,44,55,66,77,88,88,99]
let mas_of_nothing = []
for (let k = 0; k < mas_of.length; k++) {
    if (mas_of[k] %2 === 0){
        console.log(mas_of[k])
    }
}
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
for (let k = 0; k < mas_of.length; k++) {
    mas_of_nothing[k] = mas_of[k]
}
let mas_a_b_c =[ 'a', 'b', 'c']
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let abc = ''
for (let k = 0; k < mas_a_b_c.length; k++) {
    abc += mas_a_b_c[k]
}
console.log(abc)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let adc2 = ''
let d = 0
while (d<mas_a_b_c.length){
    adc2 += mas_a_b_c[d]
    d++
}
console.log(adc2)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let abc3 = ''
for (let abcElement of mas_a_b_c) {
    abc3 += abcElement
}
console.log(abc3)