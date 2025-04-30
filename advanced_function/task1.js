// Завдання 1

// Створіть функцію handleNum яка буде приймати 3 параметри.
// число
// Колбек функцію яку треба викликати якщо передане число парне
// Колбек функцію яку треба викликати якщо передане число непарне
// Створіть ще дві функції які ви будете передавати у якості колбеків, наприклад handleEven та handleOdd.
// Кожна з них має виводити просте повідомлення в консоль.
// Наприклад handleEven буде виводити текст “number is even”, a handleOdd буде виводити текст “number is odd”
// Викличте функцію handleNum і передайте в якості аргументів довільне число і дві функції які ви створили раніше

function handleNum(number, evenCall, oddCall) {
  if (number % 2 === 0) {
    evenCall();
  } else if (number % 2 !== 0) {
    oddCall();
  }
}

function numberEven() {
  console.log("number is even");
}

function numberOdd() {
  console.log("number is odd");
}

handleNum(1, numberEven, numberOdd);
handleNum(2, numberEven, numberOdd);
