// Завдання 1: Оголошення змінних для примітивних типів
// Створіть програму, в якій ви оголосите змінні для кожного з примітивних типів даних: рядок, число, буль, null та undefined. Присвойте їм значення та виведіть кожну змінну на консоль.

let street = "Symska";
let buildNumber = 12;
let isPopulated = true;
let nullValue = null;
let underfinedValue;

console.log(
  `Street: ${street}, Build Number = ${buildNumber} and population build = ${isPopulated}`,
);

console.log(street);
console.log(buildNumber);
console.log(isPopulated);
console.log(nullValue);
console.log(underfinedValue);

console.log(typeof street);
console.log(typeof buildNumber);
console.log(typeof isPopulated);
console.log(typeof nullValue);
console.log(typeof underfinedValue);
