// Завдання 2

// В цьому завданні вам потрібно використовувати then() та catch() для обробки результатів виконання промісу
// Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом

// <https://jsonplaceholder.typicode.com/todos/1>
// Функція повинна повертати як результат Promise що повертає об’єкт todo
// Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом

// <https://jsonplaceholder.typicode.com/users/1>
// Функція повинна повертати як результат Promise що повертає об’єкт user
// Викорситайте методи Promise.all та Promise.race передавши їм як аргумент масив з викликами функцій з п.п. 1-2.
// Присвойте значення отримані від цих виразів до змінних

//task1
function fetchTodo() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => {
      //console.log('GET Response_1:', data);
      return data;
    })
    .catch((error) => {
      console.error("Error text:", error);
    });
}
//fetchTodo();

////////////
function fetchAll() {
  return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json())
    .then((data) => {
      //console.log('GET Response_2:', data);
      return data;
    })
    .catch((error) => {
      console.error("Error text:", error);
    });
}
//fetchAll();

//////////////////
const promisesAll = Promise.all([fetchTodo(), fetchAll()]);
//console.log(promisesAll);

const promisesRace = Promise.race([fetchTodo(), fetchAll()]);
//console.log(promisesRace);

promisesAll.then((result) => {
  console.log("Promise.all: ", result);
  //return result
});

promisesRace.then((result) => {
  console.log("Promise.race: ", result);
  //return result
});
