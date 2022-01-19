// ####Задача 6
// Сделайте функцию `isEven()`, которая параметром принимает целое число и проверяет: чётное оно или нет.
// Если чётное — функция возвращает `true`, если нечётное — `false`.
// Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только число.
// *Чётные числа могут делится на 2 без остатка.*
// ```js
// isEven(3); // false
// isEven(4); // true
// isEven('Content'); // Error: parameter type is not a Number
// ```
//-----------------------------------------------VAR_1-----------------------------------------------
var result;
function isEven(a){
    if(typeof a != 'number'){
        throw new Error('Тип параметра не является числом / Parameter type is not a Numbe')
    } else if ((a % 2) == 0){
        result = true;
        console.log(result);
    } else {
        result = false;
        console.log(result);
    }
}
isEven(3); // false
isEven(4); // true
isEven('Content'); // Error: parameter type is not a Number

//-----------------------------------------------VAR_2-----------------------------------------------

var result;
function isEven(a){
    if(typeof a != 'number'){
        throw new Error('Тип параметра не является числом / Parameter type is not a Numbe')
    } else {
    result = ((a % 2) == 0) ? true : false;
    console.log(result)
    }
}
isEven(3); // false
isEven(4); // true
isEven('Content'); // Error: parameter type is not a Number