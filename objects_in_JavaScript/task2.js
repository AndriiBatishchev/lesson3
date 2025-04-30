// Завдання 2
// Створіть об'єкт book з такими властивостями:
// title: рядок, представляє назву книги.
// author: рядок, представляє автора книги.
// year: число, представляє рік видання книги.
// Деструктуризуйте назву та автора книги з об'єкта book.
const book = {
  title: "Kolobok",
  author: "Doe John",
  year: 1999,
};
const { title: NewTitle, author } = book;

//console.log(NewName,author );
//console.log(title);
console.log(NewTitle);
console.log(author);
