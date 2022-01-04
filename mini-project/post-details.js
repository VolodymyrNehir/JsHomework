// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
const postId = JSON.parse(localStorage.getItem('key2'));
console.log(postId)
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
.then(result=>result.json())
.then(comments=>{
    for (let i of comments){
    console.log(i)
    const commentsDivBlock = document.createElement('div');
    commentsDivBlock.innerHTML=`
        <p>id: ${i.id}</p>
        <p>postId: ${i.postId}</p>
        <p>name: ${i.name}</p>
        <p>email: ${i.email}</p>
        <p>body: ${i.body}</p>
        <p>--------------------</p>
       
`
    document.body.appendChild(commentsDivBlock);}
})