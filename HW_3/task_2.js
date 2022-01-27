// ####Задача 2
// Создать имплементацию функции `filter`, логика работы такая же как и у родного метода.
// Функция должна содержать проверки:
//- Первый параметр обязателен и может принимать только массив
//- Второй параметр обязателен и может принимать только функцию
//     ```javascript
// const arr = [1,2,3];
// filter(arr, function(item, i, arr) {});
// ```
const arr = [1,2,-3,-6,7];
var positiveArr = [];
var k=0;
var arrLenght = arr.length;

function filter(arr, param) {
    if (typeof arr === 'object') {
        if (typeof param === 'function') {
            for (let i = 0; i < arrLenght; i++) {
                if (arr[i] > 0) {
                    positiveArr[i - k] = arr[i]
                } else {
                    k++
                }
            }
            param(positiveArr);
        }else{
            console.log('Параметр callback не является функцией')
        }
    } else{
        console.log('Параметр arr не является массивом')
    }
}
filter(arr, function (number) {
    console.log(positiveArr)
})