document
  .getElementById("generateBtn")
  .addEventListener("click", generatePassword);

document
  .getElementById("showPassword")
  .addEventListener("change", togglePassword);

function generatePassword() {
  let length = Number(document.getElementById("length").value);

  let includeNumbers = document.getElementById("numbers").checked;
  let includeSpecial = document.getElementById("special").checked;
  let includeUppercase = document.getElementById("uppercase").checked;
  let excludeAmbiguous = document.getElementById("ambiguous").checked;

  let password = "";
  let allChars = "";
  let selectedPools = [];

  let lowercase = "abcdefghijklmnopqrstuvwxyz";
  let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numbers = "0123456789";
  let special = "!@#$%^&*()-_=+[]{}?";

  if (excludeAmbiguous) {
    lowercase = lowercase.replace(/[ilo]/g, "");
    uppercase = uppercase.replace(/[IO]/g, "");
    numbers = numbers.replace(/[01]/g, "");
  }

  // Lowercase is always included.
  selectedPools.push(lowercase);
  allChars += lowercase;

  if (includeUppercase) {
    selectedPools.push(uppercase);
    allChars += uppercase;
  }

  if (includeNumbers) {
    selectedPools.push(numbers);
    allChars += numbers;
  }

  if (includeSpecial) {
    selectedPools.push(special);
    allChars += special;
  }

  let message = document.getElementById("message");
  let output = document.getElementById("password");

  if (!Number.isInteger(length) || length < 4 || length > 64) {
    message.textContent = "Enter a length between 4 and 64.";
    output.value = "";
    updateStrength("");
    return;
  }

  if (length < selectedPools.length) {
    message.textContent =
      "Password length is too short for your selected options.";
    output.value = "";
    updateStrength("");
    return;
  }

  message.textContent = "";

  // Ensure each selected category appears at least once.
  for (let pool of selectedPools) {
    password += pool[randomIndex(pool.length)];
  }

  while (password.length < length) {
    password += allChars[randomIndex(allChars.length)];
  }

  // Shuffle the password.
  let chars = password.split("");

  for (let i = chars.length - 1; i > 0; i--) {
    let j = randomIndex(i + 1);
    [chars[i], chars[j]] = [chars[j], chars[i]];
  }

  password = chars.join("");
  output.value = password;

  togglePassword();
  updateStrength(password);
}

function randomIndex(max) {
  //   let random = new Uint32Array(1);
  //   let limit = Math.floor(4294967296 / max) * max;

  //   do {
  //     crypto.getRandomValues(random);
  //   } while (random[0] >= limit);

  //   return random[0] % max;
  return Math.floor(Math.random() * max);
}

function togglePassword() {
  let password = document.getElementById("password");
  let show = document.getElementById("showPassword").checked;

  password.type = show ? "text" : "password";
}

function updateStrength(password) {
  let bar = document.getElementById("strengthBar");
  let text = document.getElementById("strengthText");

  if (!password) {
    bar.style.width = "0%";
    text.textContent = "Not generated yet";
    return;
  }

  let categories = 0;

  if (/[a-z]/.test(password)) categories++;
  if (/[A-Z]/.test(password)) categories++;
  if (/[0-9]/.test(password)) categories++;
  if (/[^a-zA-Z0-9]/.test(password)) categories++;

  let score = 0;

  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (password.length >= 16) score++;
  if (categories >= 3) score++;
  if (categories === 4) score++;

  if (score <= 2) {
    bar.style.width = "33%";
    bar.style.background = "#ef4444";
    text.textContent = "Weak";
  } else if (score <= 3) {
    bar.style.width = "66%";
    bar.style.background = "#f59e0b";
    text.textContent = "Medium";
  } else {
    bar.style.width = "100%";
    bar.style.background = "#22c55e";
    text.textContent = "Strong";
  }
}
