// let number = [2,17,13,6,22,31,45,66,100,-18];
// 1. перебрати його циклом while

// let x = 0;
// while (x < number.length){
//     x++;
//     console.log(number[x]);
// }
// 2. перебрати його циклом for
// for (i of number){
//     console.log(i)
// }
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let c = 0;
// while (c < number.length){
//     c++;
//     if (c % 2 !== 0){
//         console.log(c)
//     }
// }
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = 1; i < number.length; i++){
//     if (i % 2 !== 0){
//         console.log(i)
//     }
// }
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let v = 1;
// while (v < number.length){
//     v++;
//     if (v % 2 === 0 ) {
//         console.log(number[v]);
//     }
// }
// 6. перебрати циклом for та вивести  числа тільки парні  значення

// for (i of number){
//     if (i % 2 === 0){
//         console.log(i)
//     }
// }
// 7. замінити кожне число кратне 3 на слово "okten"
// for (i of number){
//     if (i % 3 === 0){
//         i = "okten";
//     }
//     console.log(i)
// }
// 8. вивести масив в зворотньому порядку.
// for (let i = number.length; i > 0; i--){
//     console.log(i)
// }
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 1
//  x = number.length;
// while (x--){
//     console.log(number[x]);
// }
// 2
// for (let i = number.length; i > 1; i--) {
//     console.log(number[i])
// }
// 3
// let c = number.length;
// while (c--){
//     if (c % 2 !== 0){
//         console.log(c)
//     }
// }
// 4
// for (let i = 1; i > number.length; i--){
//     if (i % 2 !== 0){
//         console.log(i)
//     }
// }
// 5
// let v = number.length;
// while (v--){
//     if (v % 2 === 0 ) {
//         console.log(number[v]);
//     }
// }
// 6
// for (let i = number.length; i > 1; i--){
//     if (i % 2 === 0){
//         console.log(i)
//     }
// }
// 7
// for (let i = number.length; i > 1; i--){
//     if (number[i] % 3 === 0){
//         number[i] = "okten";
//     }
//     console.log(number[i])
// }