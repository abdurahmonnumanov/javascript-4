
function rand(min,max){
    return Math.floor(Math.random() * (max + 1 - min) + min)
}

let minNumber = +prompt('Ввелите минимальное значение');
let maxNumber = +prompt('Ввелите макстмальное значение');

for (let i = 0; i < 10; i++) {
    let num1 = rand(minNumber,maxNumber);
    let num2 = rand(minNumber,maxNumber);
    let primer = +prompt(num1  + ' + ' + num2 + ' = ');
    let answer = primer == (num1 + num2) ? ' Молодец ' : ' Ошибка '
    alert(num1 + ' + ' + num2  + ' = ' + (num1 + num2) + ' Ваш ответ ' + primer + ' , ' + answer)
}