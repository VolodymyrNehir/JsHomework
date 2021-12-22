// Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі
function wokeUp(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
                resolve ('woke up');
            },2000
        )
    })
};
function breakfast(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve ('have breakfast');
        },1000)
    })
};
function shower(){
    return new Promise(((resolve, reject) => {
        setTimeout(()=>{
            resolve ('go to the shower');
        },800)
    }))
};
function dressed(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve ('dressed');
        },300)
    })
};
function bus(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve ('wait for the bus');
        },500)
    })
};
function work (){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('work');
        },5000)
    })
};
function comeHome(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve ('come home from work');
        },2000)
    })
};
function supper(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('supper');
        },900)
    })
};
function sleep(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('sleep');
        },10000)
    })
};
function studying(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('studying')
        },1500)
    })
}
wokeUp()
    .then(resolve=>{
        console.log(resolve)
        return breakfast()
    })
    .then(resolve=>{
        console.log(resolve)
        return shower()
    })
    .then(resolve=>{
        console.log(resolve);
        return dressed();
    })
    .then(resolve=>{
        console.log(resolve);
        return bus();
    })
    .then(resolve=>{
        console.log(resolve);
        return work();
    })
    .then(resolve=>{
        console.log(resolve);
        return comeHome();
    })
    .then(resolve=>{
        console.log(resolve);
        return supper();
    })
    .then(resolve=>{
        console.log(resolve);
        return studying();
    })
    .then(resolve=>{
        console.log(resolve);
        return sleep();
    })
    .then(resolve=>{
        console.log(resolve);
    })
