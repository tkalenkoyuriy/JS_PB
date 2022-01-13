// ####Задача 2
// Перепишите `if..else` с использованием нескольких операторов `?`.
//     Для читаемости — оформляйте код в несколько строк.
//     ```js
// var message;
//
// if (login == 'Pitter') {
// message = 'Hi';
// } else if (login == 'Owner') {
// message = 'Hello';
// } else if (login == '') {
// message = 'unknown';
// } else {
// message = '';
// }
// ```

var message,
    login_1 = 'Pitter',
    login_2 = 'Owner',
    login_3 = '';

message = login_1 == 'Pitter' ? 'Hi' :
    login_2 == 'Owner' ? 'Hello' :
        login_3 =='' ? 'unknown' : '';

console.log(message);