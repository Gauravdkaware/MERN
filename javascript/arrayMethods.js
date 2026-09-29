let fruits = ["Apple", "Mango", "Banana", "Orange", "Watermelon"];
let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// fruits.forEach((value, index) => console.log(value));
fruits.forEach((element) => {
  //   console.log(element.toUpperCase());
});

numArray.map((element) => {
  //   console.log(element);
});

let evenNum = numArray.filter((element) => element % 2 == 0);
// console.log(evenNum);

let primeNum = numArray.filter((element) => {
  if (element > 0) {
    for (let i = 2; i < element; i++) {
      if (element % i == 0) {
        return false;
      }
    }
    return true;
  }
  return false;
});
// console.log(primeNum);

let squareNum = numArray
  .filter((element) => element > 0 && element % 2 !== 0)
  .map((element) => element * element);

// console.log(squareNum);

let fruit = fruits.find((element) => element == "Apple");
console.log(fruit);

// let fruitIndex = fruits.indexOf("Apple");
let fruitIndex = fruits.findIndex((element) => element == "Apple");
console.log(fruitIndex);
