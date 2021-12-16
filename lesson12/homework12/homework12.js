// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
// fetch(`https://jsonplaceholder.typicode.com/posts`)
// .then(responce=>responce.json())
// .then(value =>
// {
//
//     console.log(value)
//     for (let i =0;i<5;i++){
//     let divElement = document.createElement('div');
//     document.body.appendChild(divElement);
//         let h6Element = document.createElement('h6');
//         let h3Element = document.createElement('h3');
//         let pElement = document.createElement('p');
//         let h5Element = document.createElement('h5');
//         divElement.appendChild(h6Element);
//         divElement.appendChild(h3Element);
//         divElement.appendChild(pElement);
//         divElement.appendChild(h5Element);
//         h3Element.innerText='title'+': '+value[i].title
//         h6Element.innerText='id'+': '+value[i].id
//         pElement.innerText='body'+': '+value[i].body
//         h5Element.innerText='userId'+': '+value[i].userId
//
// }
// });
// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
fetch(`https://jsonplaceholder.typicode.com/comments`)
    .then(responce=>responce.json())
    .then(value => {
        console.log(value[1])
        for (const i of value){
            let divElement = document.createElement("div");
            document.body.appendChild(divElement);
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
        h6Element.innerText='id'+': '+i.id;
            h3Element.innerText='name'+': '+i.name;
            h4Element.innerText='email'+': '+i.email;
            pElement.innerText='body'+': '+i.body;
            h5Element.innerText='postId'+': '+i.postId;
        }
    })
