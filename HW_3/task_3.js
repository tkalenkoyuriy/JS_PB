// ####Задача 3
// Создать имплементацию функции `every`, логика работы такая же как и у родного метода.
//     Функция должна содержать проверки:
//- Первый параметр обязателен и может принимать только массив
//- Второй параметр обязателен и может принимать только функцию
//     ```javascript
// const arr = [1,2,3];
// every(arr, function(item, i, arr) {});
// ```
const arr = [1,2,3,4,-6];
var a=0;
var arrLenght = arr.length;
function every(arr, callback) {
    if  (!Array.isArray(arr)) throw new Error ('Параметр arr не является массивом');
    if  ( typeof callback !== 'function') throw new Error ('Параметр callback не является функцией');
            for (let i = 0; i < arrLenght; i++) {
                if (arr[i] <= 0) {
                    a++
                }
            }
            callback(a)}
every(arr, function (n){
    n = (a > 0 ) ? false : true
    console.log(n)
})