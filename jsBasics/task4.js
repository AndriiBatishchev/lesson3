// Завдання 4: Обчислення площі та об'єму

// Завдання 4.1
// π - число “пі”. Ви можете використати Math.PI у вашому дз для вираження цього числа
// Створіть змінну radius і присвойте їй числове значення радіуса кола.
// Обчисліть площу кола за формулою π * radius^2 і виведіть результат.

let radius = 4;
//let square = Math.PI * Math.pow(radius, 2); //Ver 2
let square = Math.PI * radius ** 2;
//let roundSquare = square.toFixed(2);  //Ver 2
console.log(`Area of circle = ${square}`);
console.log(`The rounded area of the circle = ${square.toFixed(2)}`);
//console.log(roundSquare);  //Ver 2

// Завдання 4.2
// Створіть змінну length і присвойте їй числове значення довжини прямокутника.
// Створіть змінну width і присвойте їй числове значення ширини прямокутника.
// Обчисліть площу прямокутника за формулою length * width і виведіть результат.

let length = 12.9;
let width = 5.5;
let area = length * width;
console.log(`The rounded Area of a Rectangle =  ${area.toFixed(2)}`);

// Завдання 4.3
// Створіть змінну radius і присвойте їй числове значення радіуса циліндра.
// Створіть змінну height і присвойте їй числове значення висоти циліндра.
// Обчисліть об'єм циліндра за формулою π * radius^2 * height і виведіть результат.
// Округліть кожне отримане значення до 2 значень після крапки

let radiusCylinder = 3;
let heightCylinder = 12;
let volumeCylinder = Math.PI * Math.pow(radiusCylinder, 2) * heightCylinder;
//let volumeCylinder = Math.PI * (radiusCylinder ** 2) * heightCylinder;
console.log(`Cylinder volume =  ${volumeCylinder.toFixed(2)}`); //Ver 2
