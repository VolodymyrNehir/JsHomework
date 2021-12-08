// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
// let div = document.createElement('div');
// div.classList.add('wrap','collapse','alpha','beta')
// div.style.background = 'red';
//     div.style.color ='silver';
//     div.style.fontSize = '22px';
//     div.innerText ='Big Boss'
// document.body.appendChild(div)
// let cloneNode = div.cloneNode(true);
//     document.body.appendChild(cloneNode)
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
// let mas =['Main','Products','About us','Contacts'];
//      for (let i of mas){
//        let classMenu = document.getElementsByClassName('menu')[0]
//     let li = document.createElement('li');
//        li.innerText=i;
//        classMenu.appendChild(li)
// };
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
// for (let i of coursesAndDurationArray){
//     let htmlHeadingElement = document.createElement('h3');
//     console.log(`title-${i.title}; monthDuration-${i.monthDuration}`)
//     htmlHeadingElement.innerText = `${i.title}-${i.monthDuration}`
//     document.body.appendChild(htmlHeadingElement)
// }
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
for (let i of coursesAndDurationArray){
    let divElement = document.createElement('div');
    let h1 = document.createElement('h1');
        h1.innerText= `${i.title}`;
        h1.classList+=' heading'
    let p = document.createElement('p');
        p.innerText = `${i.monthDuration}`;
        p.classList+= 'description'
    divElement.append(h1,p)
    document.body.appendChild(divElement)


}