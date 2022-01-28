// ####Задача 9
// Сделайте функцию `arrayFill`, которая будет заполнять массив заданными значениями.
// Первым параметром функция принимает значение, которым заполнять массив, а вторым — сколько элементов должно быть в массиве.
//Функция должна содержать проверки:
//- Первый параметр обязателен и может принимать только число, строку, объект, массив
//- Второй параметр обязателен и может принимать только число
//     ```javascript
// arrayFill('x',5); // [x,x,x,x,x]
// ```

var param1 = 'x' , param2 = 5;
function arrayFill(param1, param2){
    if ((typeof param1 != 'number') &&
        (typeof param1 != 'string') &&
        (typeof param1 != 'object') &&
        (!Array.isArray(arr))) throw new Error('Параметр param1 может принимать только число, строку, объект, массив');
    if(typeof param2 != 'number') throw new Error('Параметр param2 не является числом');
    let arr =[];
    for (let i = 0; i < param2; i++) {
        arr.push(param1)
    }
    console.log(arr)
}
arrayFill(param1,param2)

