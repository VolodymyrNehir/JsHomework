// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// function User (id,name,surname,email,phone){
//     this.id = id;
//     this.name =name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//
// };
// let user = new User(1,'Iryna','khushnir','iryna@gmail.com', 380978174744);
// console.log(user)
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// let nallUser = [
//     new User(1,'ola','ghht','ola@gmail.com','380657839'),
//     new User(2,'anton','iik','anton@gmail.com','380850983'),
//     new User(3,'Oleg','kkfd','oleg@gmail.com','380846389'),
//     new User(14,'Lena','hgf','lena@gmail.com','3808875638'),
//     new User(5,'Katya','ldhf','katya@gmail.com','380775643'),
//     new User(6,'Vasya','urhf','vasya@gmail.com','38088433'),
//     new User(7,'Vova','uyt','vova@gmail.com','380955434'),
//     new User(8,'Volodymyr','hhgj','volodymyr@gmail.com','380775983'),
//     new User(9,'Lyda','jjfg','lyna@gmail.com','38088594'),
//     new User(10,'Milana','jjgu','maliana@gmail.com','380775643'),
// ];
// console.log(nallUser);

//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// console.log(nallUser.filter(value => value.id % 2 === 0));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// console.log(nallUser.sort((a,b)=> a.id-b.id))
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// let product = ['milk','bread','sausage'];
// let client1 = new Client(1,'Vova','Nehir','vova@gmail.com', 380978174744,product)
// console.log(client1);
// створити пустий масив, наповнити його 10 об'єктами Client
// let anyClient =[
//     new Client(1,'Oleg','Dkod','oleg@gmail.com',395899304, product ),
//     new Client(2,'Lena','Wkkdld','lena@gmail.com',380995783, ['milk','bread','sausage','tomato','pasta']),
//     new Client(4,'Katya','Lknfn','katya@gmail.com',38098578484, product),
//     new Client(5,'vova','Ellcnc','vova@gmail.com',380975434, product),
//     new Client(6,'anton','Qwml','anton@gmail.com',380889822, ['pasta','bread','sausage']),
//     new Client(7,'Vasya','RLkm','vasya@gmail.com',3809683903, ['milk','tomato']),
//     new Client(8,'Lyda','VBnfk','lyna@gmail.com',3805890430, product),
//     new Client(9,'Leonid','Sdmdl','Leonid@gmail.com',380958943, ['milk','tomato','sausage','salt']),
//     new Client(10,'Milana','Rlmff','Milana@gmail.com',380868393, product),
//     new Client(3,'Yra','Vl;lked','Yra@gmail.com',3808859393, ['bread']),
// ];
// console.log(anyClient);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// console.log(anyClient.sort((a,b)=> a.order.length - b.order.length))