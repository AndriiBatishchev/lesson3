// Завдання 1

// Створіть функцію яка приймає два параметри: width і height.
// Усередині функції обчисліть площу прямокутника, перемноживши width на height та поверніть результат з функції.
// Викличте вашу функцію з аргументами (наприклад 5 і 10 і виведіть результат (площу прямокутника) в консоль.
// Реалізуйте функцію трьома способами (function declaration, function expression, arrow function)

// function declaration
function AreaRectangle1 (width1, height1){
    return width1 * height1;
}
console.log(`Площа прямокутника: ${AreaRectangle1(10, 15)}`);

//function expression
const AreaRectangle2 = function(width2, height2){
    return width2 * height2;
}
console.log(`Площа прямокутника: ${AreaRectangle2(3, 5)}`);

//arrow function
const AreaRectangle3 = (width3, height3) => {
    return width3 * height3;
}
console.log(`Площа прямокутника: ${AreaRectangle3(7, 8)}`);