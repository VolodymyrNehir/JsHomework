// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
const postId = JSON.parse(localStorage.getItem('key3'));
console.log(postId)
const divElement = document.createElement('div');
document.body.appendChild(divElement)
divElement.classList.add('divElement')
        const postTagdiv = document.createElement('div');
postTagdiv.classList.add('postTagdiv')

            postTagdiv.innerHTML=`
            <p>postId: ${postId.id}</p>
            <p>userId: ${postId.userId}</p>
            <p>${postId.title}</p>
            <p>${postId.body}</p>
           `

const comments = document.createElement('button');
        comments.innerText='show comments'
        postTagdiv.appendChild(comments);
        divElement.appendChild(postTagdiv);
        const commentsDivBlock = document.createElement('div');
        commentsDivBlock.classList.add('commentsDivBlock')
        comments.onclick= function () {
            comments.style.display='none'
            fetch(`https://jsonplaceholder.typicode.com/posts/${postId.id}/comments`)
                .then(result => result.json())
                .then(comments => {
                    for (let i of comments) {
                        console.log(i)
                        const commentsDivBlocks = document.createElement('div');
                        commentsDivBlocks.classList.add('commentsDivBlocks')
                        commentsDivBlocks.innerHTML = `
        <p>id: ${i.id}</p>
        <p>postId: ${i.postId}</p>
        <p>name: ${i.name}</p>
        <p>email: ${i.email}</p>
        <p>body: ${i.body}</p>
       
`
                        commentsDivBlock.appendChild(commentsDivBlocks)
                        divElement.appendChild(commentsDivBlock);
                    }
                })
        }
