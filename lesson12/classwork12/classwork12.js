// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
fetch(`https://jsonplaceholder.typicode.com/posts`)
.then(reason => reason.json())
.then(posts =>{
    for (let post of posts) {
        let divElementComment = document.createElement('div');
        let divElementPosts = document.createElement('div');
        let elementH2 = document.createElement('h2');
        let elementP = document.createElement('p');
        let buttonElement = document.createElement('button');
        buttonElement.innerText = 'show comments'
        elementH2.innerText = post.id + '.' + post.title
        elementP.innerText = post.body
        document.body.appendChild(divElementPosts)
        divElementPosts.appendChild(elementH2);
        divElementPosts.appendChild(elementP)
        divElementPosts.appendChild(buttonElement);
        divElementPosts.append(divElementComment);

        buttonElement.onclick = () => {
            fetch(`https://jsonplaceholder.typicode.com/comments`)
                .then(responce => responce.json())
                .then(comments => {
                    comments = comments.filter(comments=>comments.postId === post.id);
                    buttonElement.innerText='hide comment'
                    for (let comment  of comments) {
                        console.log(comment)
                        let divElement = document.createElement("div");
                        let h6Element = document.createElement('h6');
                        let h3Element = document.createElement('h3');
                        let pElement = document.createElement('p');
                        let h4Element = document.createElement('h4');
                        let h5Element = document.createElement('h5');
                        divElement.appendChild(h6Element);
                        divElement.appendChild(h3Element);
                        divElement.appendChild(h4Element);
                        divElement.appendChild(pElement);
                        divElement.appendChild(h5Element);
                        console.log(comment.id)
                        h6Element.innerText = 'id' + ': ' + comment.id
                        h3Element.innerText = 'name' + ': ' + comment.name
                        h4Element.innerText = 'email' + ': ' + comment.email
                        pElement.innerText = 'body' + ': ' + comment.body
                        h5Element.innerText = 'postId' + ': ' + comment.postId
                        divElementComment.appendChild(divElement);

                        }
                    buttonElement.onclick=()=> {
                        if (divElementComment.style.display !== 'none') {
                            divElementComment.style.display = 'none'
                            buttonElement.innerText = 'show comment'

                        } else {
                            divElementComment.style.display = 'block'
                            buttonElement.innerText = 'hide comment'
                        }
                    }
                })
           }

    }
});

