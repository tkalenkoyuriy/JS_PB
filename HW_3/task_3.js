// ####Задача 3
// Создать имплементацию функции `every`, логика работы такая же как и у родного метода.
//     Функция должна содержать проверки:
//- Первый параметр обязателен и может принимать только массив
//- Второй параметр обязателен и может принимать только функцию
//     ```javascript
// const arr = [1,2,3];
// every(arr, function(item, i, arr) {});
// ```

const arr = [1,2,3,4];
var a=0, b= 0;
function every(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= 0) {
            a++
        }
    }
    n = (a > 0 ) ? false : true
    callback(n)
}
every(arr, function (n){
    console.log(n)
})

