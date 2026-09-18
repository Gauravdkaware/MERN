function checkFactorial() {
  num = Number(document.getElementById("num1").value);
  console.log("Factorial of", num, "is => ", factorial(num));
}
function factorial(n) {
  let fact = 1;
  if (n === 0 || n === 1) return fact;
  for (let i = 2; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}

function checkEvenOdd() {
  num = Number(document.getElementById("num2").value);
  console.log(evenOdd(num));
}
function evenOdd(n) {
  return n % 2 == 0 ? "Even number" : "Odd number";
}

function stringReverse() {
  str = document.getElementById("num3").value;
  console.log("Reverse of", str, "is => ", strReverse(str));
}
function strReverse(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev = rev + str[i];
  }
  return rev;
}

function checkLargest() {
  num1 = Number(document.getElementById("num41").value);
  num2 = Number(document.getElementById("num42").value);
  num3 = Number(document.getElementById("num43").value);
  console.log("Largest number => ", largest(num1, num2, num3));
}
function largest(a, b, c) {
  if (a > b && a > c) return a;
  if (b > a && b > c) return b;
  return c;
}

function getSum() {
  console.log("Sum of Array [1,2,3,4,5] => ", sumOfArray([1, 2, 3, 4, 5]));
}
function sumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

function calculateAreaPeri() {
  let len = Number(document.getElementById("num61").value);
  let wid = Number(document.getElementById("num62").value);
  console.log("Area and Perimeter of rectangle => ", areaPerimeter(len, wid));
}
function areaPerimeter(len, wid) {
  const area = len * wid;
  const peri = 2 * (len + wid);
  return { area, peri };
}

function checkLeapYear() {
  let year = Number(document.getElementById("num7").value);
  console.log(year, leapYear(year));
}
function leapYear(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return "is a leap year";
  }
  return "is not a leap year";
}

function createTable() {
  let num = Number(document.getElementById("num8").value);
  table(num);
}
function table(num) {
  console.log("Table for ", num, "is");
  for (let i = 1; i < 11; i++) {
    console.log(num + " * " + i + " = " + num * i);
  }
}

function checkPalindrome() {
  str = document.getElementById("num9").value;
  console.log(str, palindrome(str));
}
function palindrome(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev = rev + str[i];
  }
  if (str == rev) {
    return " is Palidrome";
  }
  return " is not a Palidrome";
}

function checkGreatestDivisor() {
  num1 = Number(document.getElementById("num101").value);
  num2 = Number(document.getElementById("num102").value);
  console.log(
    "Greatest Divisor of " +
      num1 +
      " and " +
      num2 +
      " is " +
      gretestDivisor(num1, num2),
  );
}
function gretestDivisor(a, b) {
  while (b != 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
