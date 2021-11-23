let number = [31, 24, 42, 242, 85,5, 377, 8, 22, 11];
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let minnumber = (a,b,c) => {a<b && a<c? console.log(a):b<a && b<c?console.log(b):c<a&&c<a?console.log(c):console.log('числа одинакові');}
// minnumber(122,200,11)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let maxnumber = (a,b,c) => {a>b&&a>c?console.log(a):b>a&&b>c?console.log(b):c>b&&c>a?console.log(c):console.log('числа одинакові');}
// maxnumber(546,22,55);

// - створити функцію яка повертає найбільше число з масиву
// let maxmnumber = (n) =>{for (let i of number){if (i > n[0]){n[0] = i;}}return n[0];}
// console.log(maxmnumber(number))

// - створити функцію яка повертає найменьше число з масиву
// let minmnumber = (n) => {for (let i of number){if (i<n[0]){n[0]=i}}return n[0]}
// console.log(minmnumber(number))

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let mixnumber = (n) => {suma = 0;for (let i of number) {suma = i + suma} return suma}
// console.log(mixnumber(number));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let c = (n) => {sum = 0;for (let i of number){sum = i + sum;} return sum / 2}
// console.log(c(number))

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let maxmin = (a,b) => {for (let o of number){if (b[0] < o){b[0] = o;}} console.log(b[0]);for (let i of number){if (a[0] > i){a[0] = i;}}return a[0];}
// document.write(`<h1>${maxmin(number,number)}</h1>`);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let x =[];
// let random  = (x) => {for (let i = 0; i < 9; i++){x[i] = Math.round(Math.random() * 100 + 100);}console.log(x)}
// random(x);

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let y =[];
// let randoml = (y,limit) => {for (let i = 0; i < 9; i++){y[i] = Math.round(Math.random() * limit + limit);}console.log(y);}
// randoml(y,100);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let newmas = [1,2,3];
// let m = [];
// let newm = (n) => {for (let i = n.length -1, a = 0; i >= 0; i--, a++){m[a]= n[i];}console.log(m);return m;};
// newm(newmas);


