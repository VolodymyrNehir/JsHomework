// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули
fetch(`https://jsonplaceholder.typicode.com/users`)
.then(result=> result.json())
.then(users=>{
    console.log(users)
    const indexWrap = document.createElement('div');
    indexWrap.classList.add('indexWrap','wrap');
    for (const i of users) {
        const divElement = document.createElement('div');
        divElement.classList.add('indexUsers')
        const h4Id = document.createElement('h4');
        const pName = document.createElement('p');
        const buttonUserDetails = document.createElement('button');
        buttonUserDetails.innerText='User details';
        h4Id.innerText = `Id:`+i.id;
        pName.innerText = i.name;
        divElement.append(h4Id, pName,buttonUserDetails);
        indexWrap.appendChild(divElement);
        document.body.appendChild(indexWrap)
        buttonUserDetails.onclick= function (){
open(`user-details.html?id`, '_self')
            let details = [{
                id: i.id,
                name: i.name,
                username: i.username,
                email: i.email,
                street: i.address.street,
                suite: i.address.suite,
                city: i.address.city,
                zipcode: i.address.zipcode,
                lat: i.address.geo.lat,
                lag: i.address.geo.lag,
                phone: i.phone,
                website: i.website,
                companyName: i.company.name,
                companyCatchPhrase: i.company.catchPhrase,
                companyBs: i.company.bs,
            }]
            console.log(details)
            localStorage.setItem('key1',JSON.stringify(details))
        }
    }

})
