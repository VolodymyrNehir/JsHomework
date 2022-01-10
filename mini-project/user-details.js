// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.

const userDetailsWrap = document.createElement('div');
userDetailsWrap.classList.add('userDetailsWrap')
const querySearch = window.location.search;
const urlParams = new URLSearchParams(querySearch);
const userId = Number(urlParams.get('id'));

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(usersList => {
        const user = usersList[userId-1 ];
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => response.json())
            .then(userInfo=>{
                let details = [{
                        id: userInfo.id,
                        name: userInfo.name,
                        username: userInfo.username,
                        email: userInfo.email,
                        street: userInfo.address.street,
                        suite: userInfo.address.suite,
                        city: userInfo.address.city,
                        zipcode: userInfo.address.zipcode,
                        lat: userInfo.address.geo.lat,
                        lag: userInfo.address.geo.lag,
                        phone: userInfo.phone,
                        website: userInfo.website,
                        companyName: userInfo.company.name,
                        companyCatchPhrase: userInfo.company.catchPhrase,
                        companyBs: userInfo.company.bs,
                    }]


for (let item of details) {
    const divElement = document.createElement('div');
    divElement.classList.add('userDetailsWrap')

    for (const i in item) {
        const infiUser = document.createElement('p');
        infiUser.innerText = i + ` - ` + item[i]
        divElement.appendChild(infiUser);
    }
    const postOfCurrentUser = document.createElement('button');
    postOfCurrentUser.innerText= 'post of current user'
    divElement.appendChild(postOfCurrentUser)
    document.body.appendChild(userDetailsWrap);
    userDetailsWrap.appendChild(divElement)
    postOfCurrentUser.onclick = function () {
        postOfCurrentUser.style.display='none'
fetch(`https://jsonplaceholder.typicode.com/users/${item.id}/posts`)
    .then(result=>result.json())
    .then(posts=>{
        const divPosts = document.createElement('div');
        const wrapTagP = document.createElement('div');
        wrapTagP.classList.add('wrapTagP')
        divPosts.classList.add('wrapPosts')
        for (let itemPosts of posts){
            const tagPposts = document.createElement('p');
            const postDetailsButton = document.createElement('button');
            postDetailsButton.innerText='post details';
            tagPposts.innerText=`id `+itemPosts.id+': '+ itemPosts.title;
            wrapTagP.appendChild(tagPposts);
            divPosts.appendChild(wrapTagP)
            tagPposts.appendChild(postDetailsButton)

            postDetailsButton.onclick=function (){
                open(`post-details.html?id=${itemPosts.id}`,'_self');

            }

        };

        document.body.appendChild(divPosts);

    })

    }

}
    })
    })



