// ####Задача 1
// Перепишите код, заменив оператор `if` на тернарный оператор `?`
//     ```js
// var result;
// if (a + b < 4) {
// result = true;
// } else {
// result = false;
// }
// ```

var a=2, b=1, c=(a + b < 4),
    result = c ? true : false
console.log(result)