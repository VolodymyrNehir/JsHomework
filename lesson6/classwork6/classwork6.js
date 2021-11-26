    let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
let nowalid = (i,o,p)=> {
    if(i = i){
    console.log(o.replaceAll('---',' '));
        console.log(i.replaceAll('..',' '));
        console.log(p.replaceAll('__',' '))
    }
}
nowalid(n1,n2,n3)
// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
    let mass = [];
    let randommas =( limit) =>{
    for (let i = 0;i < limit; i++){
    mass.push(Math.round(Math.random()*limit))
    }return mass
    }
    console.log(mass)
  document.write(randommas(100));

//     - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
    console.log(mass.sort());
//     - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
let filter = randommas(100);
    console.log(filter.filter(value => value % 2 === 0 ))

//     - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
//     - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//         let nums = [11,21,3];
//     sortNums('ascending') // [3,11,21]
//     sortNums('descending') // [21,11,3]
