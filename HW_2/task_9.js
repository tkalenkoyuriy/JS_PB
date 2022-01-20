// var result;
// var arrEmpty = [];
// function isPositive(){
//     for(item of arguments){
//         if (typeof item != 'number') {
//             throw new Error('Тип параметра не является числом / Parameter type is not a Numbe')
//         } else if (item > 0) {
//             result = true;
//             arrEmpty.push(item);
//         } else {
//             result = false;
//         }
//         // console.log(result);
//     }
//     console.log(arrEmpty);
// }
// isPositive(1, 2, -4, 3, -9, -1, 7);


// var j = 0;
// function f(arr) {
//     if (typeof arr[j] == 'number') {
//         console.log(arr[j]);
//         j++
//         if (j < arr.length) {
//             f(arr);
//         } else {
//             return
//         }
//     } else if (arr.length == 0){
//         throw new Error('parameter can\'t be an empty');
//     }else if (typeof arr[j] != arr['']) {
//         throw new Error('Error: parameter type should be an array');
//     }
// }
// f([1,2,3]);

var result;
var arrEmpty = [];
function isPositive(arr) {
    for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'number') {
            if (arr[i] > 0) {
                result = true;
                arrEmpty.push(arr[i]);
            } else {
                result = false;
            }
        } else {
        throw new Error('Тип параметра не является числом / Parameter type is not a Numbe')
    }
    }
    console.log(arrEmpty);
}
isPositive([1, 2, -4, 3, -9, -1, 7]);