// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
{
    let n = [1, 2, 61, 7, 43, 5, 1, 18, 6, 444,];
    let result = n[0] + n[1] + n[2] + n[3] + n[4] + n[5] + n[6] + n[7] + n[8] + n[9];
    console.log(result)
}
// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
{
    let book = {
        name: '1984',
        page: 'роман',
        genre: 330,


    }

}
// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
{
    let book = {
        name: 'Война и мир',
        page: 'роман',
        genre: 280,
        author: 'Лев Толстой',
    }
}
// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
let books = [
    {name: 'Одиссея', page: 'поезія', genre: 480, author: 'Гомер',},
    {name: 'Ромео і Джульєтта', page: 'Трагедія', genre: 180, author: 'Уильям Шекспір'}
]
console.log(books[0]);
console.log(books[1]);
// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).   Значення площі зберігати в змінній s.
{
    let height = 23;
    let width = 10;

    let s = height * width
    console.log(s)
}
// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
{
    let heightC = 10;
    let dc = 4;
    let pi = 3.14;
    let v = pi * (dc * dc) * heightC;
    console.log(v);
}
// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
//
{
    let n = 3;
    let m = 4;
    let k = (n ** 2 + m ** 2) ** 0.5;

    console.log(k);
}

