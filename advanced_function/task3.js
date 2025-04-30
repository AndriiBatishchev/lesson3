// Завдання 3

// Створіть функцію divide, яка приймає два параметри: numerator і denominator та повертає як результат виконання число отримане від ділення.
// У функції треба поділити numerator на denominator і повернути результат.
// Додайте валідацію в функції. У разі:
// a) якщо denominator дорівнює 0
// d) або хоча б один з аргументів не є числом, викиньте помилку з інформативним повідомленням,
// Викличте функцію divide з різними значеннями numerator і denominator, включаючи випадок, ->
// -> коли denominator дорівнює 0 або один з аргументів не є числом.
// Огорніть кожен окремий виклик функції divide в try…catch.Використовуючи блок finally, ->
//-> виведіть повідомлення "Робота завершена" в консоль, навіть якщо помилка виникла або не виникла.

function divide(numerator, denominator) {
  if (
    denominator === 0 ||
    typeof numerator !== "number" ||
    typeof denominator !== "number"
  ) {
    throw new Error("Arguments must be numbers and denominator cannot be Zero");
  }

  return numerator / denominator;
}
/////////////////////////// Positive case
try {
  const result = divide(10, 2);
  console.log(result);
} catch (error) {
  console.error("Помилка:", error.message);
} finally {
  console.log("Робота завершена");
}
///
console.log("------------------");
/////////////////////////// Zero
try {
  const result = divide(10, 0);
  console.log(result);
} catch (error) {
  console.error("Помилка:", error.message);
} finally {
  console.log("Робота завершена");
}
///
console.log("------------------");
///////////////////////////some letters
try {
  const result = divide(10, "qwe");
  console.log(result);
} catch (error) {
  console.error("Помилка:", error.message);
} finally {
  console.log("Робота завершена");
}
