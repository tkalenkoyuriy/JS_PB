// ####Задача 5
// Создать имплементацию функции `reduce`, логика работы такая же как и у родного метода.
//     Функция должна содержать проверки:
//- Первый параметр обязателен и может принимать только массив
//- Второй параметр обязателен и может принимать только функцию
//- Третий параметр обязателен и может принимать только строку или число
//     ```javascript
// const arr = [1,2,3];
// const acc = 0;
// reduce(arr, function(acc, item, i, arr) {}, acc);
// ```


const arr = [1,2,3];
const acc = 0;
var  abb = 0;

function reduce(arr, callback, acc) {
    for (let i = 0; i < arr.length; i++) {
        abb = abb + arr[i]
        callback(abb, i)
        // console.log(abb)
    }

}
reduce(arr, function(acc, item, i, arr) {
    console.log(acc, item, i, arr)

}, acc);