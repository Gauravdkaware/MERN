function checkNumber() {
  num = Number(document.getElementById("num1").value);
  if (num > 0) {
    console.log("Positive number");
  } else if (num < 0) {
    console.log("Negative number");
  } else {
    console.log("Number is 0");
  }
}

function createTable() {
  let n = Number(document.getElementById("num2").value);
  for (let i = 1; i <= 10; i++) {
    console.log(n * i);
  }
}

function printEvenNumbers() {
  let a = Number(document.getElementById("num41").value);
  let b = Number(document.getElementById("num42").value);
  let first;
  let second;
  console.log("Even Numbers");
  if (a < b) {
    first = a;
    second = b;
  } else {
    first = b;
    second = a;
  }
  for (first; first <= second; first++) {
    if (first % 2 == 0) {
      console.log(first);
    }
  }
}

function calculateSum() {
  let num = Number(document.getElementById("num5").value);
  let sum = 0;
  do {
    sum = sum + (num % 10);
    num = Math.floor(num / 10);
  } while (num > 0);
  console.log(sum);
}

function printFizzBuzz() {
  let a = Number(document.getElementById("num61").value);
  let b = Number(document.getElementById("num62").value);
  let first;
  let second;
  if (a < b) {
    first = a;
    second = b;
  } else {
    first = b;
    second = a;
  }
  for (first; first <= second; first++) {
    if (first % 3 == 0 && first % 5 == 0) {
      console.log("FizzBuzz");
    } else if (first % 3 == 0) {
      console.log("Fizz");
    } else if (first % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(first);
    }
  }
}

function checkPrimeNum() {
  let num = Number(document.getElementById("num7").value);
  let isPrime = true;
  if (num <= 1) {
    isPrime = false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      isPrime = false;
      break;
    }
  }
  num = Number(document.getElementById("num7").value);
  if (isPrime) {
    console.log(num, "is a prime number");
  } else {
    console.log(num, "is not a prime number");
  }
}

function printStar() {
  let num = Number(document.getElementById("num8").value);
  for (let i = 1; i <= num; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
      stars = stars + "*";
    }
    console.log(stars);
  }
}
