// ####Задача 7
// Сделайте функцию `getDivisors`, которая параметром принимает число и возвращает массив его делителей
// (чисел, на которое делится данное число начиная от 1 и заканчивая самим собой).
// Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только число больше 0.
//     ```js
// getDivisors(12); // [1, 2, 3, 4, 6, 12]
// getDivisors('Content'); // Error: parameter type is not a Number
// getDivisors(0); // Error: parameter can't be a 0
// ```
var result;
var arr = [];
function getDivisors(a) {
    if (typeof a != 'number') {
        throw new Error('Тип параметра не является числом / Parameter type is not a Numbe');
    } else if(a == 0){
        throw new Error('Параметр не может быть 0 / Parameter can\'t be a 0');
    } else if (a > 0){
        for (let i = 1; i < (a+1); i++) {
            result = a / i;
            if (Number.isInteger(result)){
                arr.unshift(result);
            }
        }
    }
    console.log(arr);
}
getDivisors(12);
