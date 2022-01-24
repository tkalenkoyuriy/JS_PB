// // ####Задача 9
// function solution(a, b) {
//     //....
//     return [];
// }
// console.log(solution([2, 4, 3], [5, 6, 4])); // [8, 0, 7]
// console.log(solution([1, 4, 5], [4, 4, 2])); // [5, 8, 7]
// console.log(solution([1, 1, 1], [])); // [1, 1, 1]
// console.log(solution([], [9, 9, 9])); // [9, 9, 9]
// console.log(solution([9,9,9], [9,9,9])); // [1, 9, 9, 8]
// console.log(solution([], [])); // []
// console.log(solution([], [0])); // [0]
// console.log(solution([0], [0])); // [0]
// console.log(solution([1,1,1,1,1,1,1,1], [1, 0])); // [1, 1, 1, 1, 1, 1, 2, 1]
// console.log(solution([9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],[1]));
// // // [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

function solution(arrA, arrB){
      let a = arrA.join('');  // массив arrA преобразовываем в строку
      let b = arrB.join('');  // массив arrB преобразовываем в строку
      let c = (Number(a) + Number(b)); //складываем преобразованные числа
      let arrC = Array.from(String(c), Number);
      console.log(arrC)
}
solution([2, 5, 3, 0], [5, 7, 5]);
solution([2, 4, 3], [5, 6, 4]); // [8, 0, 7]
solution([1, 4, 5], [4, 4, 2]); // [5, 8, 7]
solution([1, 1, 1], []); // [1, 1, 1]
solution([], [9, 9, 9]); // [9, 9, 9]
solution([9,9,9], [9,9,9]); // [1, 9, 9, 8]
solution([], []); // []
solution([], [0]); // [0]
solution([0], [0]); // [0]
solution([1, 1, 1, 1, 1, 1, 1, 1], [1, 0]); // [1, 1, 1, 1, 1, 1, 2, 1]
//solution([9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],[1]);
// //[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]


