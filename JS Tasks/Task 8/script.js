/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator() {
  Calculator.prototype.sum = function (a, b) {
    return a + b;
  };
  Calculator.prototype.subtraction = function (a, b) {
    return a - b;
  };
  Calculator.prototype.multiplication = function (a, b) {
    return a * b;
  };
  Calculator.prototype.division = function (a, b) {
    return a / b;
  };
}

const calculator = new Calculator();

console.log(calculator.sum(1, 2));
console.log(calculator.subtraction(1, 2));
console.log(calculator.multiplication(1, 2));
console.log(calculator.division(1, 2));
