function fetchData(callback) {
  setTimeout(() => {
    const data = { name: "Wisdom Sprouts", age: 21 };
    callback(data);
  }, 2000);
}
function displayData(data) {
  console.log("Data: ", data);
}
fetchData(displayData);

function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}
function sayBye() {
  console.log("GoodBye!");
}
greet("Gaurav", sayBye);
