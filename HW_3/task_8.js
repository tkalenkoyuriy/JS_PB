// ####Задача 8
// Напишите функцию `f` . Данная функция принимает один параметр: одноуровневый или многоуровневый массив. Возвращает данная функция сумму всех элементов на всех уровнях.
// Обратите внимание что функция должна возвращать число 0, если при проходе всех уровней не было найдено ни одного числа.
// Функция должна содержать проверки:
//- Первый параметр обязателен и может принимать только массив
//- Генерировать ошибку если на каком то уровне было найдено не число и не массив
//     ```javascript
// const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
// f(arr); // 12
// const arr2 = [[[[[1,2]]]]];
// f(arr2); // 3
// const arr3 = [[[[[1,2]]],2],1];
// f(arr3); // 6
// const arr4 = [[[[[]]]]];
// f(arr4); // 0
// const arr5 = [[[[[],3]]]];
// f(arr5); // 3
// ```
const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
const arr2 = [[[[[1,2]]]]];
const arr3 = [[[[[1,2]]],2],1];
const arr4 = [[[[[]]]]];
const arr5 = [[[[[],3]]]];

function f(arr) {
    let summ = 0
    if (!Array.isArray(arr)) throw new Error('Параметр arr не является массивом');
    let arrNew = arr.flat(Infinity)
    for (let i = 0; i < arrNew.length; i++) {
        if (typeof arrNew[i] != "number"){
            throw new Error('Элемент массива не являетася числом');
        }else {
            summ = summ + arrNew[i]
        }
    }
    console.log(summ)
}
f(arr); // 12
f(arr2); // 3
f(arr3); // 6
f(arr4); // 0
f(arr5); // 3