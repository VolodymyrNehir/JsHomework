//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
// let nowalid = (i,o,p)=> {
//     if(i = i){
//     console.log(o.replaceAll('---',' '));
//         console.log(i.replaceAll('..',' '));
//         console.log(p.replaceAll('__',' '))
//     }
// }
// nowalid(n1,n2,n3)
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
//     console.log(mass.sort((a,b)=>a-b));
//     - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// let filter = randommas(100);
//     console.log(filter.filter(value => value % 2 === 0 ))

//     - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
//  let stringmass =  mass.map(value => value +'');
//     console.log(stringmass)
//     - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     sortNums('ascending') // [3,11,21]
//     sortNums('descending') // [21,11,3]
//     let nums = [11,21,3];
//     let sortNums = (direction) =>{
//         if (direction === 'ascending'){
//           return   nums.sort((a,b)=> a-b)
//         } else {
//             if (direction === 'descending'){
//                return  nums.sort((a,b)=>b-a)
//             }
//         }
//     }
//
//     console.log(sortNums('ascending'))
//     console.log(sortNums('descending'))
    // - є масив
    let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];
    // -- відсортувати його за спаданням за monthDuration
    // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
    // console.log(coursesAndDurationArray.sort((a,b)=>a.monthDuration-b.monthDuration));
    // console.log(coursesAndDurationArray.filter((value => value.monthDuration > 5)));
