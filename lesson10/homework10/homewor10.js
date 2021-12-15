// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let formElement = document.createElement('form');
// let buttonElement = document.createElement('button');
// let headingElement = document.createElement('h3');
// headingElement.innerText='hello world!';
// formElement.appendChild(headingElement)
// formElement.appendChild(buttonElement);
// document.body.appendChild(headingElement);
// document.body.appendChild(buttonElement);
// buttonElement.innerText='ok';
// headingElement.id='text';
//  let id = document.getElementById('text');
// buttonElement.onclick = ()=>{
//     id.remove()
// }

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let buttonElement = document.createElement('button');
// document.body.appendChild(buttonElement)
// buttonElement.innerText='remove me';
// buttonElement.onclick=()=>{
//     buttonElement.remove()
// }
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let formElement = document.createElement('form');
// let inputElement = document.createElement('input');
// let buttonElement = document.createElement('button');
// buttonElement.innerText='tibe';
// formElement.appendChild(buttonElement);
// formElement.appendChild(inputElement)
// inputElement.type='number';
// inputElement.name='age'
// document.body.appendChild(formElement)
// formElement.onclick=(e)=>{
//     e.preventDefault()
//     if (inputElement.value >= 18){
//         alert('you are an adult!')
//     }else {
//         alert('are you dont an adult!')
//     }
// }
// - Создайте меню, которое раскрывается/сворачивается при клике
// let divElement = document.createElement('div');
// document.body.appendChild(divElement);
// for (let i = 1;i < 7;i++) {
//     let li = document.createElement('li');
//     divElement.append(li);
//     let anchorElement = document.createElement('a');
//     li.appendChild(anchorElement);
//     anchorElement.href='#'
//     anchorElement.innerText=`Menu ${i}`
// }
// let buttonElement1 = document.createElement('button');
// document.body.appendChild(buttonElement1);
// buttonElement1.innerText='remove'
//
//   buttonElement1.onclick=()=>{
//     if (divElement.style.display==='none'){
//         divElement.style.display='block'
//         buttonElement1.innerText='remove'
//     }else {
//         divElement.style.display='none';
//         buttonElement1.innerText='add'
//     }
//   }
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
// let comments = [
//     {title: 'lorem1', body: 'lorem ipsum dolo'},
//     {title: 'lorem2', body: 'lorem ipsum dolo sit'},
//     {title: 'lorem3', body: 'lorem ipsum dolo sit'},
//     {title: 'lorem4', body: 'lorem ipsum dolo sit'},
//     {title: 'lorem5', body: 'lorem ipsum dolo sit'},
// ];
// for (let i of comments){
//     let divElement = document.createElement('div');
//     let paragraphElement = document.createElement('p');
//     divElement.innerText=i.title;
//     paragraphElement.innerText=i.body;
//     let buttonElement = document.createElement('button');
//     buttonElement.innerText='to hide';
//     document.body.appendChild(divElement);
//     divElement.appendChild(paragraphElement);
//     divElement.appendChild(buttonElement)
//
// buttonElement.onclick=()=>{
//     if (paragraphElement.style.display==='none'){
//         paragraphElement.style.display='block';
//         buttonElement.innerText='to hide';
//     }else {
//         paragraphElement.style.display='none';
//         buttonElement.innerText='show';
//     }
// }
// }


