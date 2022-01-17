// #### Задача 9
// Отсортировать массив по убыванию.
//     ```javascript
// var arr = [1,2,3,4,5,6];
// // [6,5,4,3,2,1]
// ```
// **Внимание**!
//     - Не разрашается использовать специальные методы массивов.

var arr = [1,2,3,4,5,6];
var arr_lenght = arr.length;
for (let i = 0; i < arr_lenght; i++) {
    for (let j = i ; j < arr_lenght; j++) {
        if(arr[i] < arr[j]) {
            var temp_element = arr[i]
            arr[i] = arr[j]
            arr[j] = temp_element
        }
        }
    console.log(arr[i])
    }


