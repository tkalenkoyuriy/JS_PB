// ####Задача 1
//
// Перепишите код, заменив оператор `if` на тернарный оператор `?`
//
//     ```js
// var result;
// if (a + b < 4) {
// result = true;
// } else {
// result = false;
// }
// ```

var a=5, b=2, c=(a + b < 4),
    result = c ? console.log(c) : console.log(c);