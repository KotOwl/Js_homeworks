//#dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
let first = 'hello world'
let second = 'lorem ipsum';
let third = 'javascript is cool'
console.log(first.length);
console.log(second.length);
console.log(third.length);

//#8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
console.log(first.toUpperCase());
console.log(second.toUpperCase());
console.log(third.toUpperCase());

//#ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let st = 'HELLO WORLD'
let nd = 'LOREM IPSUM'
let rd = 'JAVASCRIPT IS COOL'
console.log(st.toLowerCase());
console.log(nd.toLowerCase());
console.log(rd.toLowerCase());

//#0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   '
console.log(str.substring(str.indexOf("d"), (str.indexOf('g') + 1)))

//#bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

function splitter(text) {
    return text.split(' ')

}

let str1 = 'Ревуть воли як ясла повні';
console.log(splitter(str1));

//#Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let mas = [10, 8, -7, 55, 987, -1011, 0, 1050, 0]
let map = mas.map(x => x + '')
console.log(map);

//#5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

function sortNums(array, direction) {
    if (direction === 'ascending') {
        return array.sort((a, b) => a - b)
    }
    if (direction === 'descending') {
        return array.sort((a, b) => b - a)
    }
}

let nums = [11, 21, 3];

console.log(sortNums(nums, 'ascending')); // [3,11,21]
console.log(sortNums(nums, 'descending')); // [21,11,3]
// for (let num of nums) {
//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i] > nums[i+1]){
//             let variable = nums[i]
//             nums[i]=nums[i+1]
//             nums[i+1]=variable
//
//         }
//     }
// }
// console.log(nums)
// nums = [11,21,3];
// for (let num of nums) {
//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i] < nums[i+1]){
//             let variable = nums[i]
//             nums[i]=nums[i+1]
//             nums[i+1]=variable
//
//         }
//     }
// }
// console.log(nums)
// function descending(array) {
//     for (let num of array) {
//         for (let i = 0; i < array.length - 1; i++) {
//             if (array[i] < array[i + 1]) {
//                 let variable = array[i]
//                 array[i] = array[i + 1]
//                 array[i + 1] = variable
//
//             }
//         }
//     }
//     return array
// }
//
// function ascending(array) {
//     for (let num of array) {
//         for (let i = 0; i < array.length - 1; i++) {
//             if (array[i] > array[i + 1]) {
//                 let variable = array[i]
//                 array[i] = array[i + 1]
//                 array[i + 1] = variable
//
//             }
//         }
//     }
//     return array
// }
//
// function sortNumsVersion2(array, direction) {
//     if (direction === 'ascending') {
//         return ascending(array)
//     }
//     if (direction === 'descending') {
//         return (descending(array))
//     }
// }
//
// console.log(sortNumsVersion2(nums, 'ascending')); // [3,11,21]
// console.log(sortNumsVersion2(nums, 'descending')); // [21,11,3]

//#yo06d74c1C
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// function descendingForUsers(array) {
//     for (let user of array) {
//         for (let i = 0; i < array.length - 1; i++) {
//             if (array[i].monthDuration < array[i + 1].monthDuration) {
//                 let variable = array[i]
//                 array[i] = array[i + 1]
//                 array[i + 1] = variable
//
//             }
//         }
//     }
//     return array
// }
//
// // console.log(descendingForUsers(coursesAndDurationArray))
// function about5Month(array) {
//     let new_array = []
//     for (let user of array) {
//         if (user.monthDuration > 5) {
//             new_array.push(user)
//         }
//     }
//     return new_array
// }

// console.log(about5Month(coursesAndDurationArray))
console.log((coursesAndDurationArray).filter(value => value.monthDuration >5).sort((value1,value2) => value2.monthDuration- value1.monthDuration ).map((value, index) => {
    value.id = index + 1
    return value
}));

//#bolvdlhP
//  описати колоду карт (від 6 до туза без джокерів)
//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
let cards = [

    {
        cardSuit: "spade",
        value: "6",
        color: "black",
    },
    {
        cardSuit: "diamond",
        value: "6",
        color: "red",
    },
    {
        cardSuit: "heart",
        value: "6",
        color: "red",
    },
    {
        cardSuit: "clubs",
        value: "6",
        color: "black",
    },
    {
        cardSuit: "spade",
        value: "7",
        color: "black",
    },
    {
        cardSuit: "diamond",
        value: "7",
        color: "red",
    },
    {
        cardSuit: "heart",
        value: "7",
        color: "red",
    },
    {
        cardSuit: "clubs",
        value: "7",
        color: "black",
    },
    {
        cardSuit: "spade",
        value: "8",
        color: "black",
    },
    {
        cardSuit: "diamond",
        value: "8",
        color: "red",
    },
    {
        cardSuit: "heart",
        value: "8",
        color: "red",
    },
    {
        cardSuit: "clubs",
        value: "8",
        color: "black",
    },
    {
        cardSuit: "spade",
        value: "9",
        color: "black",
    },
    {
        cardSuit: "diamond",
        value: "9",
        color: "red",
    },
    {
        cardSuit: "heart",
        value: "9",
        color: "red",
    },
    {
        cardSuit: "clubs",
        value: "9",
        color: "black",
    },
    {
        cardSuit: "spade",
        value: "10",
        color: "black",
    },
    {
        cardSuit: "diamond",
        value: "10",
        color: "red",
    },
    {
        cardSuit: "heart",
        value: "10",
        color: "red",
    },
    {
        cardSuit: "clubs",
        value: "10",
        color: "black",
    },
    {
        cardSuit: "spade",
        value: "jack",
        color: "black",
    },
    {
        cardSuit: "diamond",
        value: "jack",
        color: "red",
    },
    {
        cardSuit: "heart",
        value: "jack",
        color: "red",
    },
    {
        cardSuit: "clubs",
        value: "jack",
        color: "black",
    },
    {
        cardSuit: "spade",
        value: "queen",
        color: "black",
    },
    {
        cardSuit: "diamond",
        value: "queen",
        color: "red",
    },
    {
        cardSuit: "heart",
        value: "queen",
        color: "red",
    },
    {
        cardSuit: "clubs",
        value: "queen",
        color: "black",
    },
    {
        cardSuit: "spade",
        value: "king",
        color: "black",
    },
    {
        cardSuit: "diamond",
        value: "king",
        color: "red",
    },
    {
        cardSuit: "heart",
        value: "king",
        color: "red",
    },
    {
        cardSuit: "clubs",
        value: "king",
        color: "black",
    },
    {
        cardSuit: "spade",
        value: "ace",
        color: "black",
    },
    {
        cardSuit: "diamond",
        value: "ace",
        color: "red",
    },
    {
        cardSuit: "heart",
        value: "ace",
        color: "red",
    },
    {
        cardSuit: "clubs",
        value: "ace",
        color: "black",
    },
]
let our_card = cards.find(card => card.cardSuit === 'spade' && card.value === 'ace')
// for (const card of cards) {
//     if (card.cardSuit === 'spade' && card.value === 'ace') {
//         our_card = card
//     }
// }
console.log(our_card)
let all_6 = []
let card = cards.filter(card => card.value === '6')
console.log(card)
let anth_cards = cards.filter(card => card.cardSuit === 'diamond')
console.log(anth_cards)
let clubs_cards = cards.filter(card => card.cardSuit === 'clubs' && card.value !== '6' && card.value !== '7' && card.value !== '8' && card.value !== '9')
console.log(clubs_cards)

console.log(cards.reduce((accumulator, currentValue) => {
     if (currentValue.cardSuit === 'spade'){
         accumulator.spades.push(currentValue)
     }
     if (currentValue.cardSuit === 'diamond'){
         accumulator.diamonds.push(currentValue)
     }
     if (currentValue.cardSuit === 'clubs'){
         accumulator.clubs.push(currentValue)
     }
     if (currentValue.cardSuit === 'heart'){
         accumulator.hearts.push(currentValue)
     }
     return accumulator

}, {
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
}));

//#4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
console.log(coursesArray.filter(value => value.modules.includes('docker')));
console.log(coursesArray.filter(value => value.modules.includes('sass')))