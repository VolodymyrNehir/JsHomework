// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function s (a,b){
    let ss = a * b;
    return ss;
}
console.log(s(10,3));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let pi = 3.141592;
function a(a,b){
    let aa = a * (b*b);
    return aa;
}
console.log(a(pi,10))
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function scy (h,r){
   let cylinders = 2*pi*r*(r+h);
   return cylinders;
}
console.log(scy(544,675));
// - створити функцію яка приймає масив та виводить кожен його елемент
let number = [2,17,13,6,22,31,45,66,100,-18];

function mass(a){
    for ( n of number){
        console.log(n)
    }
}
mass(number)
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function text (text){
    document.write(`<p>${text}</p>`)
}
text('hello world');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function textul (textul){
    document.write(`<div><ul><li>${textul}</li><li>${textul}</li><li>${textul}</li><li>${textul}</li><li>${textul}</li></ul></div>`)
}
textul('i am happy')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function textfor (tex,f){
    for (let i = 1;i <= f;i++){
        document.write(`<ul><li>${tex}</li></ul>`)
    }
}
textfor('have a good day!',3)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let prymat =[23,true,'good','Iryna',false,1];
function pr (m){
    for (i = 0; i < prymat.length; i++){
        document.write(`<ul><li>${prymat[i]}</li></ul>`)
    }
}
pr()
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
