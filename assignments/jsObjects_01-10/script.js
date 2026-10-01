// 1. Modify Object
let student = { name: "Pratik", age: 30, grade: "A" };
console.log(JSON.stringify(student));
student.subject = "Disaster Management";
student.grade = "A+";
delete student.age;
console.log("Updated Object => " + JSON.stringify(student));

console.log("_____________________");

// 2. Nested Object
let book = {
  title: "Harry Potter and the Philosopher's Stone",
  author: "J.K. Rowling",
  details: {
    page: 223,
    gerne: "Fantasy",
  },
};
console.log(JSON.stringify(book));
console.log(
  "Page => " + book.details.page + "   Gerne => " + book.details.gerne,
);

console.log("_____________________");

// 3. Loop Through Object
let product = {
  name: "iPhone 18 Pro",
  price: 134900,
  stock: 25,
};
for (k in product) {
  console.log(k + " => " + product[k]);
}

console.log("_____________________");

// 5. Compare Objects
let personOne = { name: "Pratik", age: 30 };
let personTwo = { name: "Shubham", age: 29 };

if (personOne.name === personTwo.name) {
  console.log("Both have the same name");
} else {
  console.log("Names are different");
}

if (personOne.age === personTwo.age) {
  console.log("Both have the same age");
} else if (personOne.age > personTwo.age) {
  console.log(personOne.name + " is older");
} else {
  console.log(personTwo.name + " is older");
}

// 4. Calculator
inputOneElm = document.getElementById("inputOne");
inputTwoElm = document.getElementById("inputTwo");
addElm = document.getElementById("addId");
subtractElm = document.getElementById("subtractId");
multiplyElm = document.getElementById("multiplyId");
divideElm = document.getElementById("divideId");

addElm.addEventListener("click", add);
subtractElm.addEventListener("click", subtract);
multiplyElm.addEventListener("click", multiply);
divideElm.addEventListener("click", divide);

const calculator = {
  add: function (numOne, numTwo) {
    return numOne + numTwo;
  },
  subtract: function (numOne, numTwo) {
    return numOne - numTwo;
  },
  multiply: function (numOne, numTwo) {
    return numOne * numTwo;
  },
  divide: function (numOne, numTwo) {
    return numOne / numTwo;
  },
};

function add() {
  let numOne = Number(inputOneElm.value);
  let numTwo = Number(inputTwoElm.value);
  document.getElementById("result").textContent = calculator.add(
    numOne,
    numTwo,
  );
}

function subtract() {
  let numOne = Number(inputOneElm.value);
  let numTwo = Number(inputTwoElm.value);
  document.getElementById("result").textContent = calculator.subtract(
    numOne,
    numTwo,
  );
}

function multiply() {
  let numOne = Number(inputOneElm.value);
  let numTwo = Number(inputTwoElm.value);
  document.getElementById("result").textContent = calculator.multiply(
    numOne,
    numTwo,
  );
}

function divide() {
  let numOne = Number(inputOneElm.value);
  let numTwo = Number(inputTwoElm.value);
  document.getElementById("result").textContent = calculator.divide(
    numOne,
    numTwo,
  );
}
