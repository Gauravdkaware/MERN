let number = 6;
if (number % 2 == 0) {
  console.log(number, "is even");
} else {
  console.log(number, "is odd");
}
console.log("_________________");
today = new Date();
// console.log(today);
day = today.getDay();
// console.log(day);
switch (day) {
  case 0:
    console.log("Its Sunday");
    break;
  case 1:
    console.log("Its Monday");
    break;
  case 2:
    console.log("Its Tuesday");
    break;
  case 3:
    console.log("Its Wednesday");
    break;
  case 4:
    console.log("Its Thrusday");
    break;
  case 5:
    console.log("Its Friday");
    break;
  case 6:
    console.log("Its Saturday");
    break;
}
console.log("_________________");

let num = 5;
for (let i = 1; i <= 10; i++) {
  console.log(num * i);
}
console.log("_________________");
