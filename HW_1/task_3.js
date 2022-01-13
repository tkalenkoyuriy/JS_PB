// ####Задача 3
// Перепишите код, заменив оператор `switch` на оператор `if..else`:
// ```js
// switch (val) {
// case 'a':
// console.log( 'a' );
// break;
//
// case 'b':
// case 'c':
// case 'd':
// case 'e':
// console.log( 'others' );
// break;
//
// default:
// console.log( 'unknown' );
// }
// ```

var val = 't', a = 'a', b = 'b', c = 'c', d= 'd', e = 'e';
if (val == a) {
    console.log(a)
}
else{
    if (val == b || val == c || val == d || val == e) {
        console.log('others')
    } else
        console.log('unknown');
}
