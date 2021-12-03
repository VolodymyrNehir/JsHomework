// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
//  document.getElementById('main_header').className+=' SEP-2021';
// b) робить шириниу елементу ul 400px
// for (let i of document.getElementsByTagName('ul')){
//  i.style.width = '300px';
// }
// c) робить шириниу всіх елементів з класом linkList шириною 50%
// for (let i of document.getElementsByClassName('linkList')){
//  i.style.height = '50%'
// }
// d) отримує текст який зберігається в елементі з класом listElement2
// for (let i of document.getElementsByClassName('listElement2')){
//  console.log(i.innerText);
// }
// e) отримує всі елементи li та змінює ім колір фону на сірий
// for (let i of document.getElementsByTagName('li')){
//  i.style.background = 'gray'
// }
// f) отримує всі елементи 'a' та додає їм клас anchor
// for (let i of document.getElementsByTagName('a')){
//  i.className +=' anchor'
// }
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// for (let i of document.getElementsByTagName('a')){
//  if (i.innerText === 'link3'){
//   i.style.fontSize = '40px'
//  }
// }
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// for (let i of document.getElementsByTagName('a')){
//  i.className+=` element_${i.innerText}`
// }
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let color = prompt('what color do you want to see?','')
// for (let i of document.getElementsByClassName('sub-header')){
//  i.style.background = `${color}`
// }
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let color = prompt('what color do you want to see?','')
// for (let i of document.getElementsByClassName('sub-header')){
//  if (i.innerText === 'content 2 segment'){
//   i.style.color =`${color}`
//  }
// }
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let tex = prompt('tex','')
// for (let i of document.getElementsByClassName('content_1')){
//  i.innerText = `${tex}`
// }
// l) отримати елементи p та змінити їм padding на 20px
// for (let i of document.getElementsByTagName('p')){
// i.style.padding = '20px'}
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
for (let i of document.getElementsByClassName('text2')){
 i.innerText = 'sep-2021'
}
