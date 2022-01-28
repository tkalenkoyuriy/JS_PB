// ####Задача 6
// Создать имплементацию функции `reduceRight`, логика работы такая же как и у родного метода.
//Функция должна содержать проверки:
//- Первый параметр обязателен и может принимать только массив
//- Второй параметр обязателен и может принимать только функцию
//- Третий параметр обязателен и может принимать только строку или число
//     ```javascript
// const arr = [1,2,3];
// const acc = 0;
// reduceRight(arr, function(acc, item, i, arr) {}, acc);
// ```
const arr = ['a','b','c','d',];
// const arr = [1,2,3,4];
arrLenght = arr.length
arrEmpy = [];
const acc = 0
var  abb = 0;
function reduce(arr, callback, acc) {
    if(!Array.isArray(arr)) throw new Error ('Параметр arr не является массивом');
    if( typeof callback !== 'function') throw new Error ('Параметр callback не является функцией');
    if((typeof acc != 'string')&&(typeof acc != 'number')) throw new Error ('Параметр acc не является числом или строкой');
    for (let i = 0; i < arrLenght; i++) {
        arrEmpy.unshift(arr[i])
    }
    for (let i = 0; i < arrLenght; i++) {
        abb = abb + arrEmpy[i]
    }
    callback(acc, abb)
}
reduce(arr, function(acc, item) {
    console.log(item)
}, acc);