const inputTaskElm = document.getElementById("inputTask");
const addTaskElm = document.getElementById("addTaskId");
const clearAllElm = document.getElementById("clearAllId");
const toDosElm = document.getElementById("toDos");
const toDos = [];

addTaskElm.addEventListener("click", addNewTask);
clearAllElm.addEventListener("click", clearAll);

function addNewTask() {
  let str = inputTaskElm.value;
  toDos.push(str);
  inputTaskElm.value = "";
  displayToDos();
}

function clearAll() {
  toDos.splice(0, toDos.length);
  displayToDos();
}

function deleteToDo(n) {
  toDos.splice(n, 1);
  displayToDos();
}

function displayToDos() {
  //   document.getElementById("toDos").innerHTML = toDos.join("<br>");
  toDosElm.innerHTML = toDos
    .map(
      (td, i) => `
    <p>${td} <button class="btn btn-danger btn-sm ms-2" onclick="deleteToDo(${i})">Delete</button><p>`,
    )
    .join("");
}

// Calculate Students Marks
const calInputElm = document.getElementById("calInputId");
const addMarkElm = document.getElementById("addMarkId");
const calculateElm = document.getElementById("calculateId");
const resetElm = document.getElementById("resetId");
const marksArray = [];

addMarkElm.addEventListener("click", addMarks);
calculateElm.addEventListener("click", calculateMarks);
resetElm.addEventListener("click", resetMarks);

function addMarks() {
  let marks = Number(calInputElm.value);
  marksArray.push(marks);
  calInputElm.value = "";
  let total = marksArray.reduce((sum, mark) => sum + mark, 0);
  document.getElementById("totalMarksId").textContent = total;
}

function resetMarks() {
  marksArray.splice(0, marksArray.length);
  displayMarks(0, 0, 0, 0);
}

function calculateMarks() {
  let total = marksArray.reduce((sum, mark) => sum + mark, 0);
  let average = total / marksArray.length;
  let highest = Math.max(...marksArray);
  let lowest = Math.min(...marksArray);

  displayMarks(total, average, highest, lowest);
}

function displayMarks(total, average, highest, lowest) {
  document.getElementById("totalMarksId").textContent = total;
  document.getElementById("avgMarksId").textContent = average;
  document.getElementById("highestMarksId").textContent = highest;
  document.getElementById("lowestMarksId").textContent = lowest;
}

// Search in Array
const searchInputElm = document.getElementById("searchInputId");
const searchFruitsElm = document.getElementById("searchFruitsId");
const fruits = [
  "Mango",
  "Apple",
  "Grapes",
  "Oranges",
  "Strawberry",
  "Watermelon",
  "Melon",
];

searchFruitsElm.addEventListener("click", searchFruits);

function searchFruits() {
  let fruit = searchInputElm.value;
  let result = "Not Match Found";
  //   let result = fruits.find((element) => element == fruit);
  if (fruits.find((element) => element == fruit)) {
    result = fruits.find((element) => element == fruit);
  }
  document.getElementById("resultFruitId").textContent = result;
}

// Filter Even And Odd Numbers
const numInputElm = document.getElementById("numInputId");
const addNumElm = document.getElementById("addNumId");
const showEvenElm = document.getElementById("showEvenId");
const showOddElm = document.getElementById("showOddId");
const clearNumElm = document.getElementById("clearNumId");
let numArray = [];

addNumElm.addEventListener("click", addNumbers);
showEvenElm.addEventListener("click", showEvenNums);
showOddElm.addEventListener("click", showOddNums);
clearNumElm.addEventListener("click", clearAllNums);

function addNumbers() {
  let num = Number(numInputElm.value);
  numArray.push(num);
  numInputElm.value = "";
  document.getElementById("numArrayResult").innerHTML = numArray;
}

function showEvenNums() {
  let evenArray = numArray.filter((element) => {
    return element % 2 === 0;
  });
  document.getElementById("evenResult").innerHTML = evenArray;
}

function showOddNums() {
  let oddArray = numArray.filter((element) => {
    return element % 2 !== 0;
  });
  document.getElementById("oddResult").innerHTML = oddArray;
}

function clearAllNums() {
  numArray.length = 0;
  document.getElementById("numArrayResult").innerHTML = "Numbers...";
  document.getElementById("evenResult").innerHTML = "Even Numbers...";
  document.getElementById("oddResult").innerHTML = "Odd Numbers...";
}

// Sort Names Alphabetically
const nameInputElm = document.getElementById("nameInputId");
const addNameElm = document.getElementById("addNameId");
const sortNamesElm = document.getElementById("sortNamesId");
const clearNamesElm = document.getElementById("clearNamesId");
let namesArray = [];

addNameElm.addEventListener("click", addNames);
sortNamesElm.addEventListener("click", sortNames);
clearNamesElm.addEventListener("click", clearAllNames);

function addNames() {
  let name = nameInputElm.value;
  namesArray.push(name);
  nameInputElm.value = "";
  document.getElementById("nameArrayResult").innerHTML = namesArray;
}

function sortNames() {
  for (let i = 0; i < namesArray.length; i++) {
    for (let j = i + 1; j < namesArray.length; j++) {
      if (namesArray[i] > namesArray[j]) {
        let temp = namesArray[i];
        namesArray[i] = namesArray[j];
        namesArray[j] = temp;
      }
    }
    console.log(i + " => " + namesArray);
  }
  document.getElementById("nameArraySorted").innerHTML = namesArray;
}

function clearAllNames() {
  namesArray.length = 0;
  document.getElementById("nameArrayResult").innerHTML = "Names...";
  document.getElementById("nameArraySorted").innerHTML = "Sorted Names...";
}
