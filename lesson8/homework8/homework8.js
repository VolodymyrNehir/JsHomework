// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
let byId = document.getElementById('content');
console.log(byId.innerHTML);
// -- отримує текст з блоку з id "rules"
let byIdRules = document.getElementById('rules');
console.log(byIdRules.innerHTML);
// -- замініть текст параграфа з id 'content' на будь-який інший
byId.innerHTML ='немає правил!!!'
// -- замініть текст параграфа з id 'rules' на будь-який інший
byIdRules.innerHTML ='немає правил!!!'
// -- змініть кожному елементу колір фону на червоний
for (let i of document.body.children){
i.style.background = 'red';
}
// -- змініть кожному елементу колір тексту на синій
for (let i of document.body.children){
    i.style.color = 'blue'
}
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let idRules = document.getElementById('rules')
console.log(idRules.classList);
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
for (let i of document.getElementsByClassName('fc_rules')){
    i.style.color = 'red'}


