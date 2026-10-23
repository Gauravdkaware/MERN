function sortArray() {
  let numArray = [0, 5, 0, 3, 8, 0, 2];
  let i = 0;
  for (let j = 0; j < numArray.length; j++) {
    if (numArray[j] !== 0) {
      let temp = numArray[j];
      numArray[j] = numArray[i];
      numArray[i] = temp;
      i++;
    }
  }
  console.log(numArray);
}
// sortArray();

function missingNum() {
  let arr = [1, 2, 3, 5, 6, 7];
  let expectedSum = 0;
  let actualSum = 0;
  for (let i = arr.length + 1; i > 0; i--) {
    expectedSum += i;
  }
  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }
  let missingNum = expectedSum - actualSum;
  console.log("Missing Number => " + missingNum);
}
// missingNum();

function consecutiveNum() {
  let numbers = [
    100, 4, 6, 200, 201, 101, 102, 103, 104, 105, 106, 107, 1, 3, 2, 5,
  ];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - 1 - i; j++) {
      if (numbers[j] > numbers[j + 1]) {
        let temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
      }
    }
  }
  let longest = 1;
  for (let i = 0; i < numbers.length; i++) {
    let count = 1;
    let increment = 1;
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[i] + increment === numbers[j]) {
        count++;
        increment++;
      }
    }
    if (count > longest) {
      longest = count;
    }
  }
  console.log(longest);
}
consecutiveNum();

function compressString() {
  let str = "aaabbcddddggggg";
  let newString = "";
  let j = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[j] !== str[i]) {
      newString += str[j] + (i - j);
      j = i;
    }
  }
  newString += str[j] + (str.length - j);
  console.log(newString);
}
// compressString();

function largestWord() {
  let str = "I am learning JavaScript Programming";
  let wordArray = [];
  let j = 0;
  let startIndex = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      wordArray[j] = str.slice(startIndex, i);
      j++;
      startIndex = i + 1;
    }
  }
  wordArray[j] = str.slice(startIndex, str.length);
  let largest = wordArray[0];
  for (let i = 1; i < wordArray.length; i++) {
    if (wordArray[i].length > largest.length) {
      largest = wordArray[i];
    }
  }
  console.log(largest);
}
// largestWord();
