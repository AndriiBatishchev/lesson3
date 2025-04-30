// Завдання 5
// Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
// Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
// Зробіть деструктуризацію в циклі

const users = [
  { name: "Andrii", age: 30, email: "test1@test.pro" },
  { name: "Alex", age: 25, email: "test2@test.pro" },
  { name: "Oleksandr", age: 25, email: "test3@test.pro" },
];

for (const { name, age, email } of users) {
  //console.log(name, age, email);
  console.log(`Ім'я: ${name}, Вік: ${age}, Email: ${email}`);
}
