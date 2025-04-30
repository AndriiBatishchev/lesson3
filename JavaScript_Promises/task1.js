// Напишіть функцію яка буде приймати 2 аргументи - довільний текст як перший аргумент та кількість мілісекунд як другий аргумент.
// Функція повинна вивести в консоль переданий текст через вказану кількість мілісекунд

function task1(someText, milliseconds) {
  setTimeout(function () {
    console.log(someText);
  }, milliseconds);
}

task1("Some text after set time", 2000);
