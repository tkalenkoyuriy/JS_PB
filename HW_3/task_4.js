// ####Задача 4
// Создать имплементацию функции `some`, логика работы такая же как и у родного метода.
//Функция должна содержать проверки:
//- Первый параметр обязателен и может принимать только массив
//- Второй параметр обязателен и может принимать только функцию
//     ```javascript
// const arr = [1,2,3];
// some(arr, function(item, i, arr) {});
// ```
var newArr = [];
var b;
function some(arr, callback) {
    if  (!Array.isArray(arr)) throw new Error ('Параметр arr не является массивом');
    if  ( typeof callback !== 'function') throw new Error ('Параметр callback не является функцией');
    for (let i = 0; i < arr.length; i++) {
        b = (arr[i] === 2) ? true : false
        if (b === true){
            callback(b)
            break
        }
    }
    if(b === false) {
        callback(b)
    }
}
function callback (item,i){
    console.log(item);
}
const arr = [1,3,4,-3,-2,6];
some(arr, callback);