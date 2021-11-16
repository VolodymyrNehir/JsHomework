// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
// let string = ['Oly','viktor','iryna','max','oleg'];
// let numb = [1, 16, 2021, 1997, 2100];
// let mix = [false, 2021, 'iryna', true,'phone'];
// console.log(string);
// console.log(numb);
// console.log(mix);


// for (let i = 1; i <= 5; i++){
//     console.log(i);
// }
// let string = ['Oly','viktor','iryna','max','oleg']
// for (let strings of string){
//     console.log(strings)
// }
// let string = ['Oly','viktor','iryna','max','oleg']
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let a =[];
// a[0] = 'hello';
// a[1] = 'world';
// a[2] = '!!!';
// console.log(a)
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// for (let i = 0; i <= 9; i++){
//     document.write(`<div>Lorem ipsum dolor sit.</div>`)
// }
// for (let i = 0; i <= 9; i++){
//     document.write(`<div>Lorem ipsum dolor sit amet.${i}</div>`)
// }
// let i = 0;
// let b = 19;
// while (i < b){
//     i++;
//     document.write('<h1>Lorem ipsum dolor sit amet.</h1>');
// }
// let c = 0;
// let e = 19;
// while (c < e){
//     c++;
//     document.write(`<h1>Lorem ipsum dolor sit.${c}</h1>`);
// }
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//  let number = [31, 24, 42, 242, 85,5, 377, 8, 22, 11];
// console.log(number);
// let numberB = [31, 24, 42, 242, 85,5, 377, 8, 22, 11];
// for (let numbers of numberB){
//     console.log(numbers);
// }
// let boole = [false, true,  false,true,  false, true,false, true, false, true];
// for (booles of boole){
//     console.log(booles);
// }
// let all = [false, 2021, 'iryna', true,'phone',false, 33, 'vasya', 22, 'book'];
// for (allB of all){
//     if (typeof allB === 'boolean'){
//         console.log(allB)
//     }
// }
// for (allC of all){
//     if (typeof allC === 'number'){
//         console.log(allC)
//     }
// }
// for (allD of all){
//     if (typeof allD === 'string'){
//         console.log(allD)
//     }
// }
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// let any = [];
// any[0] = true;
// any[1] = 44;
// any[2] = 'oleg';
// any[3] = false;
// any[4] = 'moto';
// any[5] = 'hello';
// any[6] = 2017;
// any[7] = true;
// any[8] = {};
// any[9] = 0;
// for (anynew of any){
//     console.log(anynew);
// }
// for (let i = 1; i <= 10; i++){
//     console.log(i);
//     document.write(i)
// }
// for (let i = 1; i <= 100; i++){
//     console.log(i);
//     document.write(i)
// }
// for (let i = 1; i <= 100; i+=2 ){
//     console.log(i);
//     document.write(i);
// }
// for (let i = 1; i <= 100; i++){
//     if (i % 2 === 0){
//         console.log(i);
//         document.write(i);
//     }
// }
// for (let i = 1; i <= 100; i++){
// if (i % 2 !== 0 ){
//     console.log(i);
//     document.write(i);
// }}