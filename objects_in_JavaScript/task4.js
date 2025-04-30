// Завдання 4
// Створіть об'єкт person з такими властивостями:
// firstName: рядок, представляє ім'я особи.
// lastName: рядок, представляє прізвище особи.
// age: число, представляє вік особи.
// Додайте до об'єкта person властивість email, яка буде містити електронну пошту особи.
// Видаліть властивість age з об'єкта person.
// Виведіть оновлений об'єкт person в консоль.

const person = {
  firstName: "Tesla",
  lastName: "Firtash",
  age: 2000,
};
// console.log('--------Without email--------');
// console.log(person);

// console.log('--------With email--------');
person.email = "test@test.pro";
// console.log(person);

// console.log('--------Without age--------');
delete person.age;
console.log(person);
