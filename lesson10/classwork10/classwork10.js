// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
//     let formElement1 = document.createElement('form');
// let inputElement1 = document.createElement('input');
// let inputElement2 = document.createElement('input');
// formElement1.appendChild(inputElement1);
// formElement1.appendChild(inputElement2);
// document.body.appendChild(formElement1);
// let formElement2 = document.createElement('form');
// let inputElement3 = document.createElement('input');
// let inputElement4 = document.createElement('input');
// formElement1.style.margin ='10px'
// formElement2.style.margin ='10px'
// formElement2.appendChild(inputElement3);
// formElement2.appendChild(inputElement4);
// document.body.appendChild(formElement2);
// let buttonElement = document.createElement('button');
// document.body.appendChild(buttonElement);
// buttonElement.innerText='Return';
// buttonElement.style.margin='10px';
// buttonElement.onclick=()=>{
//         console.log(inputElement1.value)
//         console.log(inputElement2.value)
//         console.log(inputElement3.value)
//         console.log(inputElement4.value)
//
// }



// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
// let formElement = document.createElement('form');
// let inputElement1 = document.createElement('input');
// inputElement1.type='number';
// let inputElement2 = document.createElement('input');
// inputElement2.type='number'
// let inputElement3 = document.createElement('input');
// document.body.appendChild(formElement);
// formElement.appendChild(inputElement1);
// formElement.appendChild(inputElement2);
// formElement.appendChild(inputElement3);
// let buttonElement = document.createElement('button');
// buttonElement.innerText='create';
// document.body.appendChild(buttonElement);
// buttonElement.onclick=()=>
// {let td = inputElement1.value;
//     let hr = inputElement2.value;
//     let content = inputElement3.value;
//     let tableElement = document.createElement('table');
//     document.body.appendChild(tableElement);
//     for (let i =0;i<td;i++){
//         let tbElement = document.createElement('td');
//         tableElement.appendChild(tbElement);
//         for (let x = 0;x<hr;x++){
//             let htmlhrElement = document.createElement('hr');
//             tbElement.appendChild(htmlhrElement);
//             htmlhrElement.innerText=content;
//         }
//     }
// }



// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
let bedWords=['піська','хуй','залупа','курва'];
// let inputElement = document.createElement('input');
// let buttonElement = document.createElement('button');
// inputElement.type='string'
// document.body.appendChild(buttonElement);
// document.body.appendChild(inputElement);
// buttonElement.innerText='check'
// buttonElement.onclick=()=>{
//     for (let i of bedWords){
//     if (inputElement.value===i){
//         alert('bed word')
//     }}
// }
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

let inputElement = document.createElement('input');
let buttonElement = document.createElement('button');
inputElement.type='string'
document.body.appendChild(buttonElement);
document.body.appendChild(inputElement);
buttonElement.innerText='check'
buttonElement.onclick=()=>{
    for (let i of bedWords){
        if (inputElement.value.includes(i)){
            alert('bed words')
        }}
}