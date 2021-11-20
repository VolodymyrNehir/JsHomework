// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function minnumber (a,b,c){
    a<b && a<c? console.log(a):b<a && b<c?console.log(b):console.log(c);
}
minnumber(122,200,11)