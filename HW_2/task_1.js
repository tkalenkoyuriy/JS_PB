// ####Задача 1
// Напишите функцию `f`, которая возвращает куб числа.
// Число передается параметром.
// Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только число.
//     ```js
// f(2); // 8
// f('Content'); // Error: parameter type is not a Number
// ```
function power(a){
    if(typeof a == 'number'){
        a = a*a*a;
        console.log(a);
    }else {
        console.log('Error: parameter type is not a Number');
    }
    return a;
}
var result = power('Content');
