// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
function fun (argu){
    if (arguments.length !== 1){
        console.log(arguments[0] + arguments[1])
    }
    else (console.log(arguments[0]))
}
fun( 5,5)
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
let mas = [1,2,3,4];
let num = [2,3,4,5];
function example (m,n){
    let newm = [];
    for (let i = 0;i < mas.length;i++ ){
        newm[i] = m[i] + n[i];
    }
    console.log(newm)
}
example(mas,num);
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//   let obj =  [{name: 'Dima'}, {age: 13}, {model: 'Camry'}];
//   function  object(o) {
//       for (let i = 0;i < o.length; i++ ){
//           for (let a in o[i]) {
//           console.log(a)
//       }
//       }
//   }
//   object(obj);
//   - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
let objects =  [{name: 'Dima'}, {age: 13}, {model: 'Camry'}]
function objectb(o) {
    let key = [];
    for (let i = 0; i < o.length; i++){
        for (let a in o[i]){
           key[i] = objects[a];
            }
        }
    console.log(key)
}

objectb(objects)