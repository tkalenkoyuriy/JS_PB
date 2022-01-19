// ####Задача 2
// Напишите функцию `f` которая возвращает сумму всех параметров.
// Количество параметров может быть любым.
// Данная функция должна обязательно содержать проверку входных параметров, потому что принимать она может только числа.
//     ```js
// f(1,2,3); // 6
// f(1,1,1,1,1,1,1,1); // 8
// f(1,2,'s',4); // Error: all parameters type should be a Number
// ```

var summ = 0
function f(...tmp) {
    for (item of arguments) {
        if (typeof item == 'number'){
            summ = summ + item;
        } else {
            throw new Error('all parameters type should be a Number')
        }
    }
    console.log(summ)
}
f(1,2,3); // 6
f(1,1,1,1,1,1,1,1); // 8
f(1,2,'s',4); // Error: all parameters type should be a Number

