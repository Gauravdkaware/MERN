function printSquare(n) {
  for (let i = 0; i < n; i++) {
    let line = " ";
    for (let j = 0; j < n; j++) {
      line += " *";
    }
    console.log(line);
  }
}
// printSquare(5);

function printRightTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let line = " ";
    for (let j = 0; j < i; j++) {
      line += " *";
    }
    console.log(line);
  }
}
// printRightTriangle(5);

function printInvertedRightTriangle(n) {
  for (let i = n; i >= 1; i--) {
    let line = " ";
    for (let j = 0; j < i; j++) {
      line += " *";
    }
    console.log(line);
  }
}
// printInvertedRightTriangle(5);

function printPyramid(n) {
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 0; j < n - i; j++) {
      line += " ";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
      line += "*";
    }
    console.log(line);
  }
}
// printPyramid(5);

function printDiamond(n) {
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 0; j < n - i; j++) {
      line += " ";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
      line += "*";
    }
    console.log(line);
  }
  for (let i = n - 1; i > 0; i--) {
    let line = "";
    for (let j = 0; j <= n - i - 1; j++) {
      line += " ";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
      line += "*";
    }
    console.log(line);
  }
}
// printDiamond(5);

function printNumberPyramid(n) {
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 0; j < n - i; j++) {
      line += " ";
    }
    for (let k = 0; k < i; k++) {
      line += i + " ";
    }
    console.log(line);
  }
}
// printNumberPyramid(5);

function printPascalTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 0; j < n - i; j++) {
      line += " ";
    }
    let value = 1;
    for (let k = 0; k < i; k++) {
      line += value + " ";
      value = (value * (i - k - 1)) / (k + 1);
    }
    console.log(line);
  }
}
// printPascalTriangle(6);

function printHollowSquare(n) {
  for (let i = 1; i <= n; i++) {
    let line = " ";
    for (let j = 0; j < n; j++) {
      if (i == 1 || i == n) {
        line += " *";
      } else {
        if (j == 0 || j == n - 1) {
          line += " *";
        } else {
          line += "  ";
        }
      }
    }
    console.log(line);
  }
}
printHollowSquare(5);
