// ####Задача 7
// Написать код который посчитает сумму всех четных элементов в массиве.
//     ```js
// var arr = [1,2,3,4];
// ```
// **Внимание**!
//     - Не разрашается использовать специальные методы массивов.

var arr = [1,2,3,4];
var sum = 0;
var arr_lenght = arr.length;
for (let i = 0; i < arr_lenght; i++) {
    if((arr[i] % 2) == 0){
        sum = sum + arr[i];
    }
}
console.log(sum)