const inputPara = document.getElementById("inputPara");
const result = document.getElementById("result");

function countVowels() {
  str = inputPara.value;
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str.charAt(i))) {
      count++;
    }
  }
  result.textContent = "Count of Vowels in Input : " + count;
}

function countConsonants() {
  str = inputPara.value;
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str.charAt(i))) {
      count++;
    }
  }
  result.textContent = "Count of Cowels in Input : " + count;
}

function checkPalindrome() {
  str = inputPara.value.toLowerCase();
  let rev = "";
  let res = "Input is not a Palindrome";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  if (str == rev) {
    res = "Input is a Palindrome";
  }
  result.textContent = res;
}

function extractFirstWord() {
  str = inputPara.value;
  result.textContent =
    "First word of input is : " + str.slice(0, str.indexOf(" "));
}

function replaceSpace() {
  str = inputPara.value;
  let res = str.replaceAll(" ", "_");
  result.textContent = "New string : " + res;
}

function splitString() {
  str = inputPara.value;
  let res = str.split(" ");
  result.textContent = "New string : " + res;
}

function convertToUpperCase() {
  str = inputPara.value;
  let res = str.toUpperCase();
  result.textContent = "New string : " + res;
}

function convertToTitleCase() {
  str = inputPara.value;
  let res = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i] !== " ") {
      res += str[i];
    } else {
      res += str[i];
      res += str[i + 1].toUpperCase();
      i++;
    }
  }
  result.textContent = "New string : " + res;
}

function reverseString() {
  str = inputPara.value;
  let rev = "";
  let res = "Input is not a Palindrome";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  result.textContent = "New reverse string : " + rev;
}

function countSpecificChar() {
  str = inputPara.value;
  let count = 0;
  for (let i = 0; i < str.length; i++) {}
}

function removeNonAlphaNumeric() {
  str = inputPara.value;
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (
      (str[i] >= "a" && str[i] <= "z") ||
      (str[i] >= "A" && str[i] <= "Z") ||
      (str[i] >= "0" && str[i] <= "9")
    ) {
      res += str[i];
    }
  }
  result.textContent = "New String : " + res;
}

function checkStartEndChar() {
  str = inputPara.value;
  let res = "First and Last character are different";
  if (str.charAt(0) === str.charAt(str.length - 1)) {
    res = "First and Last character are same";
  }
  result.textContent = res;
}
