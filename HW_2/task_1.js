// ####Задача 1
// Напишите функцию `f`, которая возвращает куб числа.
// Число передается параметром.
// Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только число.
//     ```js
// f(2); // 8
// f('Content'); // Error: parameter type is not a Number
// ```
//-----------------------------------------------VAR_1-----------------------------------------------
var result = 1
function f(a){
    if(typeof a == 'number'){
        for (let i = 0; i < 3; i++) {
            result = result * a;
        }
        console.log(result);
    }else {
        throw new Error('parameter type is not a Number')
    }
}
f(2); // 8
f('Content'); // Error: parameter type is not a Number

//-----------------------------------------------VAR_2-----------------------------------------------

function f(a){
    if(typeof a == 'number'){
        a = a * a * a;
        console.log(a);
    }else {
        throw new Error('parameter type is not a Number')
    }
    return a;
}
f(2); // 8
f('Content'); // Error: parameter type is not a Number