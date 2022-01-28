// ####Задача 10
// Создать имплементацию функции `reverse`, которая принимает массив в качестве параметра, а возвращает массив только в обратном порядке.
//Функция должна содержать проверки:
//- Первый параметр обязателен и может принимать только массив
//- Генерировать ошибку если был передан пустой массив
//     ```javascript
// const arr = [3,2,1];
// reverse(arr); // [1,2,3]
// ```
const arr = [3,2,1];
function reverse(arr){
    if (!Array.isArray(arr)) throw new Error('Параметр arr не является массивом');
    if (arr.length === 0) throw new Error('Массив не должен быть пустым');
    let arrNew = [];
    for (let i = 0; i < arr.length; i++) {
        arrNew.unshift(arr[i])
    }
    console.log(arrNew)
}
reverse(arr)