// #### Задача 9
// Отсортировать массив по убыванию.
//     ```javascript
// var arr = [1,2,3,4,5,6];
// // [6,5,4,3,2,1]
// ```
// **Внимание**!
//     - Не разрашается использовать специальные методы массивов.

var arr = [1,2,3,4,5,6];
for (let i = 0; i < arr.length; i++) {
    for (let j = i ; j < arr.length; j++) {
        if(arr[i] < arr[j]) {
            var temp_element = arr[i]
            arr[i] = arr[j]
            arr[j] = temp_element
        }
        }
    console.log(arr[i])
    }


