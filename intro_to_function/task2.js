// Завдання 2

// Створіть функцію яка приймає один параметр: age.
// Усередині функції перевірте, чи age більше або рівне 18.
// Якщо age відповідає умові, поверніть true, інакше поверніть false.
// Викличте вашу функцію з аргументами 25 і 15, і виведіть результат (чи є особа дорослою) в консоль для кожного випадку.

//Variant1
// function AdultAge (age){
//     if(age >= 18){
//         return 'true';
//     }
//     else if (age < 18) {
//         return 'false';
//     }
// }
// console.log(`Чи є особа дорослою: ${AdultAge(15)}`);
// console.log(`Чи є особа дорослою: ${AdultAge(25)}`);


//OR Variant2
function AdultAge (age){
    if(age >= 18){
        return 'true';
    }
        return 'false';
}
console.log(`Чи є особа дорослою: ${AdultAge(15)}`);
console.log(`Чи є особа дорослою: ${AdultAge(25)}`);
