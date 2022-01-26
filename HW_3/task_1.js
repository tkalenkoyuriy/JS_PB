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
    if (typeof arr === 'object'){
        // console.log('Выполняется1')
        if (typeof callback === 'function'){
            // console.log('Выполняется2')
            let arrLengh = arr.length
            for (let i = 0; i < arrLengh; i++) {
                callback(arr[i], i, arr);
            }
        }else{
            console.log('Параметр callback не является функцией')
        }
    } else{
        console.log('Параметр arr не является массивом')
    }
}
const arr = [1,2,3];
forEach(arr, function (item, i, arr) {
    console.log(item, i, arr);
})
