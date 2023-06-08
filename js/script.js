let num1 = window.prompt("Enter your F temp:");
const diff = farDiff().toString;

function farDiff(num1) {
  let diff = (num1 - 32) / 1.8;
  return diff
}

window.alert(num1 + " degrees farenheit is " + farDiff(num1) + " degrees Celcius.");

let num2 = window.prompt("Enter your C temp:")
const diff2 = celDiff().toString;

function celDiff(num2) {
  let diff2 = (num2 * (9 / 5)) + 32;
  return diff2
}

window.alert(num2 + " degrees celcius is " + celDiff(num2) + " degrees Farenheit.")