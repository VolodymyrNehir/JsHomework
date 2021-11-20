// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function minnumber (a,b,c){
    a<b && a<c? console.log(a):b<a && b<c?console.log(b):c<a&&c<a?console.log(c):console.log('числа одинакові');
}
minnumber(122,200,11)
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function maxnumber (a,b,c){
    a>b&&a>c?console.log(a):b>a&&b>c?console.log(b):c>b&&c>a?console.log(c):console.log('числа одинакові');
}
maxnumber(546,22,55);
// - створити функцію яка повертає найбільше число з масиву
// let number = [31, 24, 42, 242, 85,5, 377, 8, 22, 11];

// function maxmnumber (n){
//     for (let i of number){
//      if (i > n[0]){
//          n[0] = i;
//      }
// }
//       return n[0];
//
// }
// console.log(maxmnumber(number))
// - створити функцію яка повертає найменьше число з масиву
// function minmnumber(n){
//     for (let i of number){
//         if (i<n[0]){
//             n[0]=i
//         }
//     }return n[0]
// }
//
// console.log(minmnumber(number))
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let number = [31, 24, 42, 242, 85,5, 377, 8, 22, 11];
function mixnumber(n) {
    suma = 0;
    for (let i of number) {
        suma = i + suma

    } return suma
}
console.log(mixnumber(number));
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function c (n){
    sum = 0;
    for (let i of number){
        sum = i + sum;
    } return sum / 2
}

console.log(c(number))