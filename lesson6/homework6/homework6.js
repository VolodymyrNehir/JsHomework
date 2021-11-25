let helloWorld = 'hello world';
let loremIpsum = 'lorem ipsum';
let javascriptIsCool = 'javascript is cool';
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// console.log(helloWorld.length);
//
// console.log(loremIpsum.length);
//
// console.log(javascriptIsCool.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// console.log(helloWorld.toUpperCase());
// console.log(loremIpsum.toUpperCase());
// console.log(javascriptIsCool.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let helloworld = 'HELLO WORLD';
// console.log(helloworld.toLowerCase());
// let loremipsum = 'LOREM IPSUM';
// console.log(loremipsum.toLowerCase());
// let javascriptiscool = 'JAVASCRIPT IS COOL';
// console.log(javascriptiscool.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str.trim())

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
// let str = 'Каждый охотник желает знать';
// let arr = str.split(' ');
// console.log(arr);

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
// let str = 'Каждый охотник желает знать';
// let delete_characters = (str, length)=> {
//     return str.substring(0,length);
// };
// document.write(delete_characters(str,7));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
// let str = "HTML JavaScript PHP";
// let insert_dash = (str) => {
//    return  str.toLocaleUpperCase().replaceAll(' ', '-')
// }
// document.write(insert_dash(str));
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let one =(lorm) =>{
//    return  lorm.replaceAll(lorm[0],(lorm[0].toUpperCase()))
// }
// document.write(one(loremIpsum))
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let string =('Напишіть функцію , яка повертає рядок')
// let newstrin ='';
// let capitalize = (str)=> {
//     for (i of str.split(' ')){
//       newstrin =  newstrin.concat(i.replace(i[0],i[0].toUpperCase()),' ');
//     }return newstrin.slice(0,newstrin.length)
// }
// console.log(capitalize(string))

