for (let i = 0; i < 10; i++) {
    document.write(`<div>Lorem ipsum dolor.</div>`)
}
for (let i = 0; i < 10; i++) {
    document.write(`<div> ${i} Lorem ipsum dolor.</div>`)
}
let j = 0;
while (j < 20) {
    document.write(`<h1>Lorem ipsum dolor sit.</h1>`);
    j++
}
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write("<" + "ul" + ">")
for (let listOfItem of listOfItems) {
    document.write("<li>" + listOfItem + "</li>")
}
document.write("<" + "/ul" + ">")

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
for (let product of products) {
    document.write(`<div class = "product-card">
        <h3 class="product-title" > ${product.title}. Price - ${product.price}$ </h3>
        <img src="${product.image}" alt="" class="product-image"/>
    </div>`)
}

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
document.write("<br>"+"Користувачі зі статусом true"+ "<br>"+"<br>" )
for (let user of users) {
    if (user.status === true){
        document.write(" name : " + user.name + "\n"  )
        document.write(" age : " + user.age + "\n"  )
        document.write(" status : " + user.status + "\n"  )
        document.write("<hr>");
        console.log(user)
    }
}
document.write("<br>"+"Користувачі зі статусом false"+ "<br>"+"<br>" )
console.log("")
for (let user of users) {
    if (user.status === false){
        document.write(" name : " + user.name + "\n "  )
        document.write(" age : " + user.age + "\n"  )
        document.write(" status : " + user.status + "\n"  )
        document.write("<hr>");
        console.log(user)
    }
}
document.write("<br>"+"Користувачі старші за 30 років"+ "<br>"+"<br>" )
for (const usersKey of users) {
    if (usersKey.age > 30) {
        for (const userField in usersKey) {
            document.write(`${userField}: ${usersKey[userField]}<br>`)


        }
        document.write("<hr>");
    }
}