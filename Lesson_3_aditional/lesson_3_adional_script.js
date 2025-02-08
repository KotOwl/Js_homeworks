'use strict'
// #WpkK0ZH1
// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let mas_int = [1, 3, 4, 5, 7]
let mas_string = ["Gwen", "Ahri", "Irelia", "Sabrina Carpenter", "Gragas"]
let mas_boolean = [true, true, false, true, false]
let mas_hole = [1, 2, 3, 4, 5, "Gwen", "Ahri", "Irelia", "Sabrina Carpenter", "Gragas", true, false, false, true, true]
for (let i = 0; i < mas_int.length; i++) {
    console.log(mas_int[i])
}
for (let i = 0; i < mas_string.length; i++) {
    console.log(mas_string[i])
}
for (let i = 0; i < mas_boolean.length; i++) {
    console.log(mas_boolean[i])
}
for (let i = 0; i < mas_hole.length; i++) {
    console.log(mas_hole[i])
}
//
// #4aDbSgh
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let empty_mas = []
for (let i = 0; i < 10; i++) {
    empty_mas[i] = i + 1
    console.log(empty_mas[i])
}
// #qLQLJSeN7i
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
let mas_of_numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]

let number_in_mas = 0
//1
while (number_in_mas < mas_of_numbers.length) {
    console.log(mas_of_numbers[number_in_mas])
    number_in_mas++
}
//2
for (let i = 0; i < mas_of_numbers.length; i++) {
    console.log(mas_of_numbers[i])

}
//3
number_in_mas = 0
while (number_in_mas < mas_of_numbers.length) {
    if ((number_in_mas % 2) !== 0) {
        console.log(mas_of_numbers[number_in_mas])
        number_in_mas++
    } else number_in_mas++
}
//4
for (let i = 0; i < mas_of_numbers.length;) {
    if ((i % 2) !== 0) {
        console.log(mas_of_numbers[i])
        i++
    } else i++
}
//5
number_in_mas = 0
while (number_in_mas < mas_of_numbers.length) {
    if ((mas_of_numbers[number_in_mas] % 2) === 0) {
        console.log(mas_of_numbers[number_in_mas])
        number_in_mas++
    } else number_in_mas++
}
//6
for (let i = 0; i < mas_of_numbers.length;) {
    if ((mas_of_numbers[i] % 2) === 0) {
        console.log(mas_of_numbers[i])
        i++
    } else i++
}
//7
for (let i = 0; i < mas_of_numbers.length;) {
    if ((mas_of_numbers[i] % 3) === 0) {
        mas_of_numbers[i] = "okten"
        console.log(mas_of_numbers[i])
        i++
    } else i++
}
mas_of_numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
//8 , 9.1
let mas_of_numbers_length = (mas_of_numbers.length)

while (mas_of_numbers_length > 0) {
    console.log(mas_of_numbers[mas_of_numbers_length - 1])
    --mas_of_numbers_length
}
//9.2
for (let i = mas_of_numbers.length; i > 0; i--) {
    console.log(mas_of_numbers[i - 1])
}
//9.3
mas_of_numbers_length = (mas_of_numbers.length)
while (mas_of_numbers_length > 0) {
    if ((mas_of_numbers_length % 2) !== 0) {
        console.log(mas_of_numbers[mas_of_numbers_length - 1])
        mas_of_numbers_length--
    } else mas_of_numbers_length--
}
//9.4
for (let i = mas_of_numbers.length; i > 0;) {
    if ((i % 2) !== 0) {
        console.log(mas_of_numbers[i - 1])
        i--
    } else i--
}
//9.5
mas_of_numbers_length = (mas_of_numbers.length)
while (mas_of_numbers_length > 0) {
    if ((mas_of_numbers[mas_of_numbers_length - 1] % 2) === 0) {
        console.log(mas_of_numbers[mas_of_numbers_length - 1])
        mas_of_numbers_length--
    } else mas_of_numbers_length--
}
//9.6
for (let i = mas_of_numbers.length; i > 0;) {
    if ((mas_of_numbers[i - 1] % 2) === 0) {
        console.log(mas_of_numbers[i - 1])
        i--
    } else i--
}
//9.7

for (let i = mas_of_numbers.length; i > 0;) {
    if ((mas_of_numbers[i - 1] % 3) === 0) {
        mas_of_numbers[i - 1] = 'okten'
        console.log(mas_of_numbers[i - 1])
        i--
    } else i--
}
// #yHAwJOyiC
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let mas_of_num = [1, 5, 2, 45, 2, 21, 46, 24, 1, 5]
for (let i = 0; i < mas_of_num.length; i++) {
    console.log(mas_of_num[i])
}
// #GamKju89ob
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let mas_of_string = ["Gwen", "Ahri", "Irelia", "Sabrina Carpenter", "Gragas", "Kaisa", "Evelyn", "Aurora", "Sona", "Lady Gaga"]
for (let i = 0; i < mas_of_string.length; i++) {
    console.log(mas_of_string[i])
}

// #Bm76xmg
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let mas_of_rand = [1, "Snow Wife", true, 45, 2, false, 46, "Camila Cabello", true, 5]
for (let i = 0; i < mas_of_rand.length; i++) {
    console.log(mas_of_rand[i])
}

// #u3vmD0YJXh
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let mas_of_all= [0,1,2,3,4,5,6,7,8,9,"Espresso","Taste","Please Please Please","Bed Chem","Juno","Nonsense","Feather","Good Graces","because i liked a boy","Coincidence",true,false,true,false,true,false,true,false,true,false]
for (let i = 0; i < mas_of_all.length; ) {
    if ( typeof(mas_of_all[i]) === "boolean" ){
    console.log(mas_of_all[i])
        i++}
    else i++
}
// #9stMq2ou
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

for (let i = 0; i < mas_of_all.length; ) {
    if ( typeof(mas_of_all[i]) === "string" ){
        console.log(mas_of_all[i])
        i++}
    else i++
}
// #mK4pmM4
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (let i = 0; i < mas_of_all.length; ) {
    if ( typeof(mas_of_all[i]) === "number" ){
        console.log(mas_of_all[i])
        i++}
    else i++
}

// #0pm3EyTKy9
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let empty_mas_2=[]
empty_mas_2[0]="K/DA"
empty_mas_2[1]="Madison Beer"
empty_mas_2[2]="Ok"
empty_mas_2[3]="Riot"
empty_mas_2[4]="bbon$"
empty_mas_2[5]="Odetari"
empty_mas_2[6]="Kesha"
empty_mas_2[7]= 2
empty_mas_2[8]= 3
empty_mas_2[9]= true
for (let i = 0; i < empty_mas_2.length; i++) {
    console.log(empty_mas_2[i])

}
// #mDMWMW5a
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 10; i++) {
    console.log(i)
    document.write(`${i} <br>`)
}
// #4sXhaa5YMM
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i++) {
    console.log(i)
    document.write(`${i} <br>`)
}
// #s24slNyz7
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i+=2) {
    console.log(i - i/2)
    document.write(`${i-i/2} <br>`)
}
//#zananT5FR1
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i < 100; ) {
    if ((i % 2)===0  ){
        console.log(i)
        document.write(`${i} <br>`)
        i++
    }
    else i++
}

// #Tfrwls7FM
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0; i < 100; ) {
    if ((i % 2) !== 0  ){
        console.log(i)
        document.write(`${i} <br>`)
        i++
    }
    else i++
}
// #reLkOkTB29Q
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// - знайти найбльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
const books = [
    {
        title: "Harry Potter and the Philosopher's Stone",
        pages: 223,
        authors: ["J.K. Rowling"],
        genres: ["Fantasy", "Adventure"]
    },
    {
        title: "The Lord of the Rings",
        pages: 1178,
        authors: ["J.R.R. Tolkien"],
        genres: ["Fantasy", "Adventure", "Epic", "Drama"]
    },
    {
        title: "Good Omens",
        pages: 412,
        authors: ["Neil Gaiman", "Terry Pratchett"],
        genres: ["Fantasy", "Comedy", "Satire"]
    },
    {
        title: "To Kill a Mockingbird",
        pages: 281,
        authors: ["Harper Lee"],
        genres: ["Fiction", "Drama"]
    }
];
let longest_book=0
let longest_book_title
for (let book of books) {
    if (longest_book < book.pages){
        longest_book = book.pages
        longest_book_title = book.title
    }
}
console.log(`Найбільша книжка ${longest_book_title} a її кількість сторінок -${longest_book}`)
document.write(`Найбільша книжка ${longest_book_title} a її кількість сторінок - ${longest_book}`)
let count_of_genres=0
let book_with_the_most_genres_title
for (let i = 0; i < books.length; i++) {
    if (books[i].genres.length > count_of_genres){
        count_of_genres=books[i].genres.length
        book_with_the_most_genres_title = books[i].title

    }
}
console.log(`Книжка з найбільшою кількістю жанрів ${book_with_the_most_genres_title} a її кількість жанрів -${count_of_genres}`)
document.write(`Книжка з найбільшою кількістю жанрів ${book_with_the_most_genres_title} a її кількість жанрів -${count_of_genres}`)
let two_author_title
for (let i = 0; i < books.length; i++) {
    if (books[i].authors.length === 2){
        two_author_title=books[i].title
        console.log(`Книжка ${two_author_title} написана двома авторами`)
        document.write(`Книжка ${two_author_title} написана двома авторами`)

    }
}
for (let i = 0; i < books.length; i++) {
    if (books[i].authors.length === 1){
        two_author_title=books[i].title
        console.log(`Книжка ${two_author_title} написана одним автором`)
        document.write(`Книжка ${two_author_title} написана одним автором`)

    }
}