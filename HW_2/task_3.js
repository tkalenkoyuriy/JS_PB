// ####Задача 3
// Сделайте функцию `f`, которая отнимает от первого числа второе и делит на третье.
// Данная функция должна обязательно содержать проверку входных параметров, потому что принимать она может только числа.
//     ```js
// f(9,3,2); // 3
// f('s',9,3) // Error: all parameters type should be a Number
// ```
var result = 0;
function f(a,b,c){
    for(item of arguments){
        if (typeof item == 'number'){
            result = (a-b)/c;
        } else {
            throw new Error('Error: all parameters type should be a Number')
        }
    }
    console.log(result)
}
f(9,3,2); // 3
f('s',9,3) // Error: all parameters type should be a Number

