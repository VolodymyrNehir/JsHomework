

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car(model,made,year,maxSpeed,volume){
//   this.model=  model;
//     this.made = made;
//    this.year = year;
//    this.maxSpeed = maxSpeed;
//     this.volume = volume;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     };
//     this.info = function (){
//         for (let i in this){
//             if (typeof this[i] !== 'function') {
//                 console.log(`${i}-${this[i]}`)
//             }
//         }
//     }
//     this.increaseMaxSpeed = function (newSpeed){
//        if (this.maxSpeed !== newSpeed){
//            this.maxSpeed = newSpeed;
//        return console.log(this.maxSpeed)}
// }
// this.changeYear = function (newValue){
//         if (this.year !== newValue){
//            this.year = newValue
//         }
//     console.log(this.year);
// }
// this.addDriver = function (name,age){
//         this.nameDriver = name;
//         this.ageDriver = age;
// }
//
// }
// let car = new Car('bmw','Germany',2,301,2998);
// console.log(car)
// car.drive()
// car.info()
// car.increaseMaxSpeed(259)
// car.changeYear(14)
// car.addDriver('Viktor',24);
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Car{
//     constructor(model, made, year, maxSpeed, volume) {
//         this.model = model;
//         this.made = made;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.volume = volume;
//         this.drive = function (){
//                     console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//
//         }
//         this.info = function (){
//         for (let i in this){
//            if (typeof this[i] !=='function'){
//                console.log(`${i}-${this[i]}`)
//            }
//         }
//         }
//         this.increaseMaxSpeed = function (newSpeed){
//             if (this.maxSpeed !== newSpeed){
//                 this.maxSpeed = newSpeed
//             }
//             console.log(this.maxSpeed)
//         }
//         this.changeYear = function (newValue){
//             if (this.year !== newValue){
//                 this.year = newValue
//             }console.log(this.year)
//         }
//         this.addDriver = function (name,age){
//         this.nameDriver = name;
//         this.ageDriver = age;
// }
//     }
// }
// let cars = new Car('bmw','Germany',2,301,2998);
// console.log(cars);
// cars.drive();
// cars.info();
// cars.increaseMaxSpeed(214);
// cars.changeYear(19);
// cars.addDriver('Oleg', 29)
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// function Cinderella  (name,age,sizefoot) {
//     this.name = name;
//     this.age = age;
//     this.sizefoot = sizefoot;
// }
// let cinderellas =[
//     new Cinderella('oksana',23,36),
//     new Cinderella('Olena',20,36.5),
//     new Cinderella('Ivanka',19,37),
//     new Cinderella('Karina',25,37.5),
//     new Cinderella('Ira',22,38),
//     new Cinderella('Lena',18,38.5),
//     new Cinderella('Anna',25,39),
//     new Cinderella('Galyna',21,39.5),
//     new Cinderella('Vika',20,40),
//     new Cinderella('Diana',21,40.5),
// ]
// console.log(cinderellas)
// class Princ {
//     constructor(name, age, shoe) {
//         this.name = name;
//         this.age = age;
//         this.shoe = shoe;
//     }
//
// }
// let newprinc = new Princ('Volodymyr',24,38);
//     for (let i of cinderellas){
//         if (i.sizefoot === newprinc.shoe){
//             console.log('my cinderella is', i.name)
//         }
//         }
// console.log(cinderellas.find(value => value.sizefoot === newprinc.shoe));
