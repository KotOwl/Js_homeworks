// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name , surname,email,phone){
    this.name = name;
    this.id = id;
    this.surname = surname;
    this.email = email;
    this.phone = phone;

}
let mas = [
 new User(1, 'vasya','coolguy','vasya.cool@gamil.com','0770924598'),
 new User(2, 'stas','chillbrovov','stas.cool@gamil.com','0880436555'),
 new User(4, 'maria','ivanova','maria.cool@gamil.com','0754675467'),
 new User(3, 'anna','ivanova','anna.cool@gamil.com','0543634567'),
 new User(6, 'dmytro','ivanov','dmyto.cool@gamil.com','0764654346'),
 new User(7, 'petro','ivanov','petro.cool@gamil.com','0870454506'),
 new User(5, 'stepan','stepanenko','artem.cool@gamil.com','0765654067'),
 new User(8, 'artem','stepanenko','stepan.cool@gamil.com','0878757578'),
 new User(9, 'lilya','stepanenko','lilya.cool@gamil.com','0767676685'),
 new User(10, 'ivan','kozak','ivan.cool@gamil.com','05878568797'),
]
console.log(mas);
// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(mas.filter(mas => mas.id % 2 === 0));

//#pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(mas.sort((id1, id2) => id1.id - id2.id));

// #nkMXISv
// - створити конструктор для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

function Client(id, name , surname,email,phone,orders){
    this.name = name;
    this.id = id;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.orders = orders;
}
// function Orders(title,price){
//     this.title = title;
//     this.price = price;
// }
let smth_mas = [
    new Client(1, 'vasya','coolguy','vasya.cool@gamil.com','0770924598',[{title: 'ps', price: 23000}, {title: 'phone', price: 80000}]),
    new Client(2, 'stas','chillbrovov','stas.cool@gamil.com','0880436555',[{title: 'pc', price: 123000}, {title: 'phone', price: 80000}] ),
    new Client(4, 'maria','ivanova','maria.cool@gamil.com','0754675467',[{title: 'dyason', price: 23000}, {title: 'phone', price: 80000},{title: 'dish washer', price: 10000 }]),
    new Client(3, 'anna','ivanova','anna.cool@gamil.com','0543634567',[{title: 'dyason', price: 23000}, {title: 'phone', price: 80000},{title: 'dish washer', price: 10000 },{title:'car',price: 120000000}]),
    new Client(6, 'dmytro','ivanov','dmyto.cool@gamil.com','0764654346',[{title: 'ps', price: 23000}]),
    new Client(7, 'petro','ivanov','petro.cool@gamil.com','0870454506',[{title: 'pc', price: 123000}]),
    new Client(5, 'stepan','stepanenko','artem.cool@gamil.com','0765654067',[{title: 'ps', price: 23000}]),
    new Client(8, 'artem','stepanenko','stepan.cool@gamil.com','0878757578',[{title: 'ps', price: 23000}]),
    new Client(9, 'lilya','stepanenko','lilya.cool@gamil.com','0767676685',[{title: 'ps', price: 23000}]),
    new Client(10, 'ivan','kozak','ivan.cool@gamil.com','05878568797',[{title: 'ps', price: 23000}])];
console.log(smth_mas);


//8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log(smth_mas.sort((order1, order2) => (order1.orders).length - (order2.orders).length));

//#vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model,producer,year,maxSpeed,engineCapacity){

        this.model = model
        this.producer = producer
        this.year = year
        this.maxSpeed = maxSpeed
        this.engineCapacity = engineCapacity



}
let careta =new Car('Coolcar', 'Me', 1999, 30, 5);
function drive(maxSpeed){
    console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
}
function info(Car){
    console.log(`Модель : ${Car.model}\n Виробник : ${Car.producer}\n Рік вироблення :${Car.year}\n Максимальна швидкість :${Car.maxSpeed}\n Об'єм двигуна:${Car.engineCapacity}`)
}
function increaseMaxSpeed(newSpeed,carInfo){
    carInfo.maxSpeed = newSpeed

}
function changeYear(newYear,carInfo){

    carInfo.year = newYear

}
function AddDriver (model,producer,year,maxSpeed,engineCapacity,driver){
    Car.apply(this,arguments)
    this.driver = driver
}
drive(careta.maxSpeed)
info(careta)
increaseMaxSpeed(50, careta)
console.log(careta.maxSpeed)
changeYear(1800,careta)
console.log(careta.year)
let driver=new AddDriver('Coolcar', 'Me', 1999, 30, 5,{age :123 ,name: 'крутий чел'})
console.log(driver)
//#5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class car2 {
    constructor(model, producer, year, maxSpeed, engineCapacity) {

        this.model = model
        this.producer = producer
        this.year = year
        this.maxSpeed = maxSpeed
        this.engineCapacity = engineCapacity}


        drive()
        {
            console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
        }

        info(car)
        {
            console.log(`Модель : ${car.model}\n Виробник : ${car.producer}\n Рік вироблення :${car.year}\n Максимальна швидкість :${car.maxSpeed}\n Об'єм двигуна:${car.engineCapacity}`)
        }
        increaseMaxSpeed(newSpeed, carInfo)
        {
            carInfo.maxSpeed = newSpeed

        }
        changeYear(newYear, carInfo)
        {

            carInfo.year = newYear

        }
        addDriver (driver){
            this.driver = driver
        }

}
let careta2 =new car2('Coolcar', 'Me', 1999, 30, 9);
console.log(careta2)
    careta2.drive()
    careta2.info(careta2)
    careta2.increaseMaxSpeed(50, careta2)
    console.log(careta2.maxSpeed)
    careta2.changeYear(1800,careta2)
    console.log(careta2.year)
careta2.addDriver('ffsf');
console.log(careta2);

//#zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella{
    constructor(name,age,feetSize) {
       this.name = name
        this.age= age
        this.size=feetSize
    }

}
let princesses = [
    new Cinderella('Alisa',23,31),
    new Cinderella('Maria',24,32),
    new Cinderella('Rose',25,34),
    new Cinderella('Anna',21,37),
    new Cinderella('Ahmed',22,43),
    new Cinderella('Sabrina',18,36),
    new Cinderella('Elza',22,37),
    new Cinderella('Vika',23,35),
    new Cinderella('Lisa',25,33),
    new Cinderella('Britney',29,39),
]
console.log(princesses)
let prince ={name : "Bruno",age :23,shoeSize: 34}
for (const princess of princesses) {
    if (princess.size === prince.shoeSize){
        console.log(princess)
    }
}
console.log(princesses.find(princess => princess.size === prince.shoeSize));

//#gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter

Array.prototype.MyOwnForEach = function (callback) {
    let array = this;
    for (const arrayElement of array) {
        callback(arrayElement)
    }
}
let mas2 =[3,2,4,21,1,5,3,13,41,2,1,8]
mas2.MyOwnForEach((item)=>console.log(item))

Array.prototype.MyFilter = function (array){
    let arr =[]
    for (const arrayElement of this) {
        if(array(arrayElement)){
            arr.push(arrayElement)
        }
    }
    return arr
}
console.log(mas2.MyFilter((item) => item % 2 === 0));