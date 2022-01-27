// ####Задача 1
// Создать имплементацию функции `forEach`, логика работы такая же как и у родного метода.
//     Функция должна содержать проверки:
//- Первый параметр обязателен и может принимать только массив
//- Второй параметр обязателен и может принимать только функцию
//     ```javascript
// const arr = [1,2,3];
// forEach(arr, function(item, i, arr) {});
// ```

function forEach(arr, callback) {
    if (!Array.isArray(arr)) throw new Error('Параметр arr не является массивом');
    if (typeof callback !== 'function') throw new Error('Параметр callback не является функцией');
    let arrLengh = arr.length
    for (let i = 0; i < arrLengh; i++) {
        callback(arr[i], i, arr);
    }

}
const arr = [1,2,3];
forEach(arr, function (item, i, arr) {
    console.log(item, i, arr);
})
