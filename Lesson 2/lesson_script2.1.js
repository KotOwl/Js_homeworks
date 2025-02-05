// #67kfznmiMl
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [1, 'knew' , 'book', 'true' , 2 , 6 , 'arrow','okten_top',"js",'10'];

// for (let i=0; i<(arr.length ); i++){
//     console.log(arr[i]);
// }

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// #LARqoUj5I
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 =  {
    title : 'Ruination',
    pageCount : 406,
    genre : 'fantasy'

};
let book2 =  {
    title : 'Surgeon',
    pageCount : 304,
    genre : 'psychology'

};
let book3 =  {
    title : 'Hiding place',
    pageCount : 624,
    genre : 'Romance'

};

// #sA3Gg1sCp
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.


let book4 = {
    title :  'The Great Gatsby',
    pageCount : 180,
    genre : 'Fiction',
    author : [
        name = 'F. Scott Fitzgerald',
        age = 'not alive'
    ]
};
let book5 = {
    title :  'Ulysses',
    pageCount : 1000,
    genre : 'Fiction',
    author : [
        name = 'James Joyce',
        age = 'not alive'
    ]
};
let book6 = {
    title :  'In Search of Lost Time',
    pageCount : 4300,
    genre : 'Fiction',
    author : [
        name = 'Marcel Proust',
        age = 'not alive'
    ]
};
// console.log(book5.author[0])

// #jCHFnEbdmFd
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    user1 ={
    name : 'Vasyl',
    username :'Vasya_Nagibator',
    password :'password1',
    },
    user2 ={
        name : 'Stanislav',
        username :'Stasik_top',
        password :'password2',
    },
    user3 ={
        name : 'Iryna',
        username :'Iryna_okten',
        password :'password3',
    },
    user4 ={
        name : 'Bruno',
        username :'Bruno_Mars',
        password :'password4',
    },
    user5 ={
        name : 'Rose',
        username :'Rose_flower',
        password :'password5',
    },
    user6 ={
        name : 'Gaga',
        username :'Lady_Gaga',
        password :'password6',
    },
    user7 ={
        name : 'Sabrina',
        username :'Sabrina_Carpenter',
        password :'password7',
    },
    user8 ={
        name : 'Sergey',
        username :'Sergey_Nagibator',
        password :'password8',
    },
    user9 ={
        name : 'Vasyl',
        username :'Vasya_neNagibator',
        password :'password9',
    },
    user10 ={
        name : 'Vasyl',
        username :'neVasya_Nagibator',
        password :'password10',
    },

]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);


// #coYydZuaeEB
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу

let week_weather =[
    monday = {
        morning : 'temperature',
        during_the_day : "temperature",
        evening :"temperature",
    },
    thuesday = {
        morning : 'temperature',
        during_the_day : "temperature",
        evening :"temperature",
    },
    wednesday = {
        morning : 'temperature',
        during_the_day : "temperature",
        evening :"temperature",
    },
    thursday = {
        morning : 'temperature',
        during_the_day : "temperature",
        evening :"temperature",
    },
    friday = {
        morning : 'temperature',
        during_the_day : "temperature",
        evening :"temperature",
    },
    saturday = {
        morning : 'temperature',
        during_the_day : "temperature",
        evening :"temperature",
    },
    sunday = {
        morning : 'temperature',
        during_the_day : "temperature",
        evening :"temperature",
    },
]

// #bAUsaq6LI
// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let a = 1;
if (a !== 0){
    console.log('Вірно');
}
else console.log('Невірно')
a = 0;
if (a !== 0){
    console.log('Вірно');
}
else console.log('Невірно')
a = 3;
if (a !== 0){
    console.log('Вірно');
}
else console.log('Невірно')

//
// #3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = +prompt("Введіть число від 0 до 59")

switch (true) {
    case (time <=15 && time >=0) :
        console.log('Перша чверть');
        break;
    case time <=30 && time >15 :
        console.log('Друга чверть');
        break;
    case time <=45 && time >30 :
        console.log('Третя чверть');
        break;
    case time <=60 && time >45 :
        console.log('Четверта чверть');
        break;
    default :
        console.log("???")
        break;
}
//

// #UMoNq4biWGe
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = +prompt("Введіть номер дня (від 1 до 31)")
switch (true) {
    case (day <=10 && time >=1) :
        console.log('Перша декада');
        break;
    case day <=20 && time >10 :
        console.log('Друга декада');
        break;
    case time <=31 && time >20 :
        console.log('Третя декада');
        break;
    default :
        console.log("???")
        break;
}

let english_day = prompt('Введіть номер дня тижня (від 1 до 7)');
switch (english_day) {
    case '1' :
        console.log('Monday');
        break;
    case '2' :
        console.log('Tuesday');
        break;
    case '3' :
        console.log('Wednesday');
        break;
    case '4' :
        console.log('Thursday');
        break;
    case '5' :
        console.log('Friday');
        break;
    case '6' :
        console.log('Saturday');
        break;
    case '7' :
        console.log('Sunday');
        break;
    default :
        console.log("???")
        break;
}

// #uwsz1RnTQJ1
// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
let numb_1 = +prompt("Ведіть перше число");
let numb_2 = +prompt("Ведіть друге число")
if (numb_1 > numb_2){
    console.log('Перше число більше' , numb_1)
}
else if (numb_2 > numb_1){
    console.log('Друге число більше' , numb_2)
}
else if (numb_2 === numb_1){
    console.log('Числа рівні між собою')
}
else console.log('???')

// #iBvqtjEm
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).


let x = !!prompt("Напишіть щось")
if(x === false){
    x = "Default"
}
console.log(x)

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration >= 5){
    console.log(coursesAndDurationArray[0].title ,":" ,"Cупер");
}
if (coursesAndDurationArray[1].monthDuration >= 5){
    console.log(coursesAndDurationArray[1].title ,":" ,"Cупер");
}
if (coursesAndDurationArray[2].monthDuration >= 5){
    console.log(coursesAndDurationArray[2].title ,":" ,"Cупер");
}
if (coursesAndDurationArray[3].monthDuration >= 5){
    console.log(coursesAndDurationArray[3].title ,":" ,"Cупер");
}
if (coursesAndDurationArray[4].monthDuration >= 5){
    console.log(coursesAndDurationArray[4].title ,":" ,"Cупер");
}
if (coursesAndDurationArray[5].monthDuration >= 5){
    console.log(coursesAndDurationArray[5].title ,":" ,"Cупер");
}



