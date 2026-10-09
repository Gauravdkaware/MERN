let generatedOTP;
function generateOTP() {
  generatedOTP = Math.floor(1000 + Math.random() * 9000);
  alert("Your OTP is: " + generatedOTP);
}
function verifyOTP() {
  let enteredOTP = "";
  document.querySelectorAll(".otp").forEach((input) => {
    enteredOTP += input.value;
  });
  if (!generatedOTP) {
    document.getElementById("message").textContent =
      "Please generate OTP first.";
  } else if (enteredOTP === String(generatedOTP)) {
    document.getElementById("message").textContent =
      "OTP verified successfully!";
  } else {
    document.getElementById("message").textContent =
      "Invalid OTP. Please try again.";
  }
}
function moveNext(input, nextIndex) {
  if (input.value && nextIndex < 4) {
    document.querySelectorAll(".otp")[nextIndex].focus();
  }
}
