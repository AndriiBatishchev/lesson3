// After a hard quarter in the office you decide to get some rest on a vacation.
// So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
// You will need a rental car in order for you to get around in your vacation.
// The manager of the car rental makes you some good offers.
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total.
// Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
// Write a code that gives out the total amount for different days(d).

let CarCost = 40;
function RentCar(CarDay) {
  if (typeof CarDay !== "number") {
    return "Error: You can only enter integers."; // First, we check whether this is a number
  } else if (CarDay % 1 !== 0 || CarDay === 0) {
    return "Error: You cannot enter fractional numbers and ZERO";
  } else if (CarDay >= 3 && CarDay < 7) {
    return `$${CarCost * CarDay - 20}`;
  } else if (CarDay >= 7) {
    return `$${CarCost * CarDay - 50}`;
  } else return `$${CarCost * CarDay}`;
}
console.log(`Price for renting a car:'${RentCar(1)}'`);
console.log(`Price for renting a car:'${RentCar(3)}'`);
console.log(`Price for renting a car:'${RentCar(6)}'`);
console.log(`Price for renting a car:'${RentCar(7)}'`);
console.log(`Price for renting a car:'${RentCar(10)}'`);
console.log(`Price for renting a car:'${RentCar(10.1)}'`);
console.log(`Price for renting a car:'${RentCar("s")}'`);
console.log(`Price for renting a car:'${RentCar(0)}'`);
