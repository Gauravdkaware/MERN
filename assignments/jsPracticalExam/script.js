let str = "Learning JavaScript is fun! Fun and easy to learn Javascript.";
let arr = str.split(" ");
let revStr = "";
for (let i = 0; i < arr.length; i++) {
  let temp = " ";
  for (let j = arr[i].length - 1; j >= 0; j--) {
    temp += arr[i][j];
  }
  revStr += temp;
}
// console.log(str + " Reverse String => " + revStr);

modifyString(str);
function modifyString(str) {
  let obj = {};
  let temp = str.toLowerCase();
  temp = temp.replace(/[^\w\s]/g, "");
  temp = temp.split(" ");
  for (let i = 0; i < temp.length; i++) {
    let count = 0;
    for (let j = 0; j < temp.length; j++) {
      if (temp[i] === temp[j]) {
        count++;
      }
    }
    obj[temp[i]] = count;
  }
  //   console.log(obj);
}

let users = [
  { name: "Gaurav", age: 19 },
  { name: "Pratik", age: 17 },
  { name: "Shubham", age: 21 },
  { name: "Vibhor", age: 15 },
  { name: "Prankit", age: 18 },
];
calculateAge(users);
function calculateAge(users) {
  let newUsers = [];
  for (element of users) {
    if (element.age > 18) {
      newUsers.push(element);
    }
  }
  //   console.log(newUsers);
}

let products = [
  { name: "Mobile", price: 69999 },
  { name: "Television", price: 52000 },
  { name: "Air Conditioner", price: 45000 },
  { name: "Laptop", price: 80000 },
  { name: "Refirigerator", price: 32000 },
  { name: "Headphone", price: 4999 },
];
sortProduct(products);
function sortProduct(products) {
  for (let i = 0; i < products.length; i++) {
    for (let j = i + 1; j < products.length; j++) {
      if (products[i].price > products[j].price) {
        let temp = products[i];
        products[i] = products[j];
        products[j] = temp;
      }
    }
  }
  //   console.log(products);
}

convertToUrl(str);
function convertToUrl(str) {
  str = str.toLowerCase().replace(/[^\w\s]/g, "");
  str = str.replaceAll(" ", "-");
  //   console.log(str);
}

let wordArray = [
  "tiger",
  "dog",
  "cat",
  "cow",
  "lion",
  "grape",
  "panda",
  "deer",
];
sortArray(wordArray);
function sortArray(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let len = arr[i].length;
    if (!obj[len]) {
      obj[len] = [];
    }
    obj[len].push(arr[i]);
  }
  console.log(obj);
}
