// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
// let namberA = +prompt('введіть число');
// let namberB = +prompt('введіть число');
// if (namberA > namberB){
//     alert(`${namberA} більше`);
// }
// else if (namberA < namberB){
//     alert(`${namberB} більше`);
// }
// else if (namberA === namberB){
//     alert(`${namberB} і ${namberA} рівні`);
// }
// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
// let namber = +prompt('який у вас номер квартири?');
// if (namber <= 20 && namber > 0){
//     alert(`у вас перший під'їзд`);
// }
// else if (namber <= 48 && namber > 20) {
//     alert(`у вас другий під'їзд`);
// }
// else if (namber <= 90 && namber > 48){
//     alert(`у вас третій під'їзд`);
// }
// else {
//     alert('в будинку лише 90 квартир (');
// }
// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
// let namber = +prompt('введіть число');
// namber === 10? alert('ВІРНО'):alert('НЕВІРНО');
// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else
// let x = {}
// if (typeof x === 'number'){
//     alert(1);
// }
// else if (typeof x === 'string'){
//     alert(2)
// }
// else if (typeof x === 'boolean'){
//     alert(3)
// } else if (typeof x === 'object'){
//     alert(4)
// } else {
//     alert('ви ввели не правильне значиння');
// }

// console.log(x)

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
// let tm =Math.floor(Math.random()* (0,30))
// if (tm >= 10 && tm <= 22) {
//  alert('ми йдемо ВЧИТИСЯ')}
//  else {
//      alert('сидимо вдома і вчимося ОНЛАЙН');
// }

// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .

// let namber = +prompt('введіть число від 1 до 5');
// switch (namber){
//     case 1: alert('ви виграли автомобіль!');
//         break;
//     case 2: alert('ви виграли мотоцикел!');
//         break;
//     case 3: alert('ви виграли телефон!');
//         break;
//     case 4: alert('ви виграли велосипед!');
//         break;
//     case 5: alert('ви виграли сертифікат на 1000грн!');
//         break;
//     default: alert('ви ввели щось не те');
//
// }