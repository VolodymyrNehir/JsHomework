// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.

const details = JSON.parse(localStorage.getItem('key1'));

for (let item of details) {
    console.log(item)
    const divElement = document.createElement('div');

    for (const i in item) {
        const infiUser = document.createElement('p');
        infiUser.innerText = i + ` - ` + item[i]
        divElement.appendChild(infiUser);
        console.log(i)
    }
    const postOfCurrentUser = document.createElement('button');
    postOfCurrentUser.innerText= 'post of current user'
    divElement.appendChild(postOfCurrentUser)
    document.body.appendChild(divElement);
    postOfCurrentUser.onclick = function () {
fetch(`https://jsonplaceholder.typicode.com/users/${item.id}/posts`)
    .then(result=>result.json())
    .then(posts=>{
        const divPosts = document.createElement('div');
        for (let itemPosts of posts){
            console.log(itemPosts.title)
            const tagPposts = document.createElement('p');
            const postDetailsButton = document.createElement('button');
            postDetailsButton.innerText='post details';
            tagPposts.innerText=`id `+itemPosts.id+': '+ itemPosts.title;
            divPosts.appendChild(tagPposts);
            divPosts.appendChild(postDetailsButton);
            postDetailsButton.onclick=function (){
                open(`post-details.html`,'_self');
                const postDetails =[
                    {

                    }
                ]
                localStorage.setItem('key2',JSON.stringify(itemPosts.id))
            }
        };


        document.body.appendChild(divPosts);

        console.log(posts)
    })
    }
}
