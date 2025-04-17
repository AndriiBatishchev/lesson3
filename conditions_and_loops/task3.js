// Завдання 3: Генерація таблиці множення

// Створіть програму, яка генерує таблицю множення для обраного числа за допомогою кожного з циклів for, while .

// Виберіть число для якого потрібно згенерувати таблицю множення.
// Використовуючи цикл for, створіть таблицю множення для обраного числа від 1 до 10. Виведіть результат в консоль.


// Повна таблиця множення від 1 до 10
// for (let product1 = 1; product1 <= 10; product1 ++){
//     console.log(`Таблиця множення для ${product1}:`);
//     for  (let product2 = 1; product2 <= 10; product2 ++) {
//             let result = product1 * product2;
//             console.log(`${product1} x ${product2} = ${result}`)
//     }
//     console.log('----------');
// }


let product1 = 6;
let result = '';
    console.log(`Таблиця множення для ${product1}:`); {
    for  (let product2 = 1; product2 <= 10; product2 ++) {
            result = product1 * product2;
            console.log(`${product1} x ${product2} = ${result}`)
    }
}

// Використовуючи цикл while створіть таблицю множення для обраного числа від 1 до 10. Виведіть результат в консоль.

let count1 = 5;
let count2 = 1;
console.log(`Таблиця множення для ${count1}:`);
while (count2 <= 10) {
    {let res = count1 * count2;
        console.log(`${count1} x ${count2} = ${res}`)
        count2++
    }
}
        