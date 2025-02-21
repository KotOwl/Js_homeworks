// #8Nmt60ZT
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let div= document.createElement('div')
div.classList.add('wrap')
div.classList.add ('collapse')
div.classList.add('alpha')
div.classList.add('beta')
div.style.background = 'gold'
div.style.color='red'
div.style.fontSize='20px'
document.body.appendChild(div)

let copy = div.cloneNode(true)
document.body.appendChild(copy)


//#OPLI89c9G
// - Є масив:
// ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let mas =['Main','Products','About us','Contacts']
let ul =document.createElement('ul')
for (let i = 0; i <mas.length ; i++) {
    let li=document.createElement('li')
    li.innerText=mas[i]
    ul.appendChild(li)
}
document.body.appendChild(ul)

//#jeBqHV525U5
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let wrapper=document.createElement('div')
wrapper.classList.add('wrapper')

for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
    let block = document.createElement("div")
    block.innerHTML= `Курс  :${coursesAndDurationArrayElement.title} <br> тривалість : ${coursesAndDurationArrayElement.monthDuration}<br><hr> `
    wrapper.appendChild(block)
}
document.body.appendChild(wrapper)

//#Kx1xgoKy8
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.
//
// ==========================
let wrapper2 = document.createElement('div')
wrapper2.classList.add('wrapper2')
for (const course of coursesAndDurationArray) {
    let div = document.createElement('div')
    let h1 = document.createElement('h1')
    let p = document.createElement('p')
    div.classList.add("item")
    h1.classList.add("heading")
    p.classList.add("description")
    h1.innerText=course.title
    p.innerText=course.monthDuration
    div.append(h1 , p)
    wrapper2.append(div)
}

document.body.appendChild(wrapper2)