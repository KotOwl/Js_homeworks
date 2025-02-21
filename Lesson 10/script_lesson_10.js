//#sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let div = document.createElement('div')
div.id = 'text'

let button = document.createElement('button')
button.onclick = function () {


    div.style.display = 'none'


}
button.style.width = "200px"
button.style.height = "20px"
button.innerText = "disable"

document.body.append(div, button)


//#j693ca8
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача

document.getElementById('f1')
let f1 = document.forms.f1

f1.onsubmit = function (ev) {
    ev.preventDefault()
    let age = +this.age.value;
    if (age < 18) {
        let div = document.createElement("div")
        let h1 = document.createElement('h1')
        h1.innerText = "Ваш вік менший 18"
        div.append(h1)
        document.body.append(div)
    }
}

//#ymAmN2xJ
// Стоврити форму з трьома полями для name, surname , age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

let f2 = document.forms.f2

f2.onsubmit = function (ev) {
    ev.preventDefault()
    let age = this.age_for_f2.value
    let name = this.name.value
    let surname = this.surname.value
    let div = document.createElement("div")
    let p1 = document.createElement('p')
    let p2 = document.createElement('p')
    let p3 = document.createElement('p')
    p1.innerText = name
    p2.innerText = surname
    p3.innerText = age
    div.append(p1, p2, p3)
    document.body.append(div)
}

//#2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
let target = document.getElementById('target')
if (!localStorage.getItem('reload')) {
    localStorage.setItem('reload', '0')
} else {
    let parse = JSON.parse(localStorage.getItem('reload'))
    parse += 1
    let str = JSON.stringify(parse)
    localStorage.setItem('reload', `${str}`)
}
target.innerText = localStorage.getItem('reload')

//#LhSfdhM3
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessionsList зберігається інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM

let sessionsList = JSON.parse(localStorage.getItem('sessionsList')) || [];
sessionsList.push(new Date());
localStorage.setItem('sessionsList', JSON.stringify(sessionsList));


// #Jg0gPO00
// створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

let weight = document.getElementById('weight')
let weightCon = document.getElementById('weightConventor')

weight.oninput = function (ev){
    let weight =this.value;
    weight *= 2.20462
    weightCon.innerText = weight

}

//#RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void
let mas = [1,2,3,4,5]
let obj = {name:'Gwen' , status:"immune"}
localStorage.setItem('asd',`${mas}`)
function addToLocalStorage(arrayName , objToAdd){
   let mas = localStorage.getItem(`${arrayName}`).split(",")
    console.log(mas)
    let newMas =[]

    for (const elements of mas) {
        let parse = JSON.parse(elements)
        newMas.push(parse)
    }
console.log(newMas)
    newMas.push(objToAdd)
    let str =JSON.stringify(newMas)
    console.log(str);
    localStorage.setItem(`${arrayName}`,`${str}`)

}
addToLocalStorage('asd',obj)
console.log(localStorage.getItem('asd'));

//#kUSgFqWY
//  Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

let f3 = document.forms.f3

f3.onsubmit = function (ev) {
    ev.preventDefault()
    let rows  =  this.rows.value
    let colum  =  this.colum.value
    let text  = this.text.value
    let div = document.createElement('div')
    div.style.width = '100%';



    for (let i = 0; i < colum*rows; i++) {
        let cell = document.createElement('div')
        cell.innerText = `${text}`
        cell.style.border = '1px solid black';
        cell.style.background = 'lightblue'
        div.append(cell)
    }
    div.style.display='grid'

    div.style.gridTemplateColumns = `repeat(${colum},1fr)`
    div.style.gridTemplateRows = `repeat(${rows},1fr)`
    div.style.gap = '20px'
    document.body.append(div)
}

//#bq1zkx7WP
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//  зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//  При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

if (!localStorage.getItem('time')){
    let time =new Date().getTime()
    localStorage.setItem('time',`${time}` )
}
console.log(localStorage.getItem('time'))
if (!localStorage.getItem('timeDiv')){
    localStorage.setItem('timeDiv','100' )
}

let timeDiv = document.createElement('div')

let newTime = new Date().getTime()


    let parseTime =JSON.parse(localStorage.getItem('time'))
    if ((newTime - parseTime) > 10000){
       let newTimeText = JSON.parse(localStorage.getItem('timeDiv'))
        newTimeText += 10
        let newTimeTextStr = JSON.stringify(newTimeText)
        localStorage.setItem('timeDiv',`${newTimeTextStr}`)
    }

timeDiv.innerText = localStorage.getItem('timeDiv')
localStorage.setItem('time',`${newTime}`)
document.body.append(timeDiv)

//#NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

if (!localStorage.getItem('masInput')){
    localStorage.setItem('masInput', '10')
}
let buttonNext = document.createElement('button')
let buttonPrev = document.createElement('button')
buttonPrev.innerText = 'prevent'
buttonNext.innerText='next'

let masDiv = document.createElement('div')
masDiv.append(buttonPrev,buttonNext)
buttonNext.onclick =function () {

    let parse = JSON.parse(localStorage.getItem('masInput'))
    parse +=10
    let str = JSON.stringify(parse)
    localStorage.setItem('masInput',`${str}`)
}
buttonPrev.onclick =function () {
    let parse = JSON.parse(localStorage.getItem('masInput'))
    parse -=10
    let str = JSON.stringify(parse)
    localStorage.setItem('masInput',`${str}`)
}
let forVissible = JSON.parse(localStorage.getItem('masInput'))
if( forVissible === 10){
    buttonPrev.style.display ='none'
}
if(forVissible ===100){
    buttonNext.style.display ='none'
}


let masDivText=[]
for (let i = (forVissible - 10); i <forVissible ; i++) {
    let p = document.createElement('p')
    masDiv.append(p)
    p.innerText = i
}


document.body.append(masDiv)