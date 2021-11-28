// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }
// class User {
//     constructor(id, name, username, email, address,streed,suite,city,zipcode,lat,lng,phone,website,namecompany,catchPhrase,bs) {
//         this.id = id;
//         this.name = name;
//         this.username = username;
//         this.email = email;
//         this.address = {
//             street:  streed,
//             suite: suite,
//             city: city,
//             zipcode: zipcode,
//             geo: {
//                 lat: lat,
//                 lng: lng,
//             }
//         };
//         this.phone= phone;
//         this.website = website;
//         this.company = {
//             name: namecompany,
//             catchPhrase: catchPhrase,
//             bs: bs
//         }
//         }
//     }
// let fguio= new User()
// console.log(fguio);
// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select

// function Tags (title,action,attrs) {
//     this.titleOfTag = title;
//     this.action = action;
//     this.attrs = attrs;
// }
//     let a = new Tags('a','Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.',
//         [{ titleOfAttr: 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
//         { titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области.'},
//        { titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл'}]);
//
// let div = new Tags('div','Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.',
//         [{ titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>'},
//         { titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'},
//        ]);
//
// let h1 = new Tags('h1','HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка.',
//         [{ titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка.'}]);
//
// let span = new Tags('span','Тег <span> предназначен для определения строчных элементов документа.',
//         ['Для этого тега доступны универсальные атрибуты и события.']);
//
// let input = new Tags('input', "Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.",
//     [{titleOfAttr: 'accept', actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'},
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к элементу с помощью комбинации клавиш.'},
//         {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание изображения.'}
//     ]);
// let form = new Tags('form', "Тег <form> устанавливает форму на веб-странице.",
//     [
//         {titleOfAttr: 'accept-charset', actionOfAttr: 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.'},
//         {titleOfAttr: 'action', actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы.'},
//         {titleOfAttr: 'autocomplete', actionOfAttr: 'Включает автозаполнение полей формы.'}
//     ]);
// let option = new Tags('option', "Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.",
//     [
//         {titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'},
//         {titleOfAttr: 'label', actionOfAttr: 'Указание метки пункта списка'},
//         {titleOfAttr: 'selected', actionOfAttr: 'Заранее устанавливает определенный пункт списка выделенным.'}
//     ]);
//
// let select = new Tags('select', "Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором.",
//     [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'},
//         {titleOfAttr: 'autofocus', actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы.'},
//         {titleOfAttr: 'disabled', actionOfAttr: 'Блокирует доступ и изменение элемента.'}
//     ]);
//  console.log(a,h1,div,span,input,form,option,select)