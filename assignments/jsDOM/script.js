let heading = document.getElementById("firstHeading");
let button = document.getElementById("firstBtn");

button.addEventListener("click", function () {
  heading.textContent = "Welcome To JavaScript DOM";
});

let secondBtn = document.getElementById("secondBtn");

secondBtn.addEventListener("click", function () {
  let paragraphs = document.querySelectorAll(".secondPara");

  paragraphs.forEach(function (para) {
    para.style.color = "#22d3ee";
    para.style.backgroundColor = "#fde047";
  });
});

let list = document.getElementById("languageList");
let thirdBtn = document.getElementById("thirdBtn");
thirdBtn.addEventListener("click", function () {
  let items = list.getElementsByTagName("li");
  for (let i = 0; i < items.length; i++) {
    items[i].textContent = "Language Updated";
  }
});

let fourthPara = document.querySelector(".fourthPara");
let fourthBtn = document.getElementById("fourthBtn");
fourthBtn.addEventListener("click", function () {
  fourthPara.textContent = "This is the first paragaph";
});

let cards = document.querySelectorAll(".card");
let fifthBtn = document.getElementById("fifthBtn");
fifthBtn.addEventListener("click", function () {
  cards.forEach(function (card) {
    card.textContent = "JavaScript DOM Card";
  });
});
