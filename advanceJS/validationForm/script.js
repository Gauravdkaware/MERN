// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          document.querySelector("#successMessage").style.display = "block";
        }

        form.classList.add("was-validated");
      },
      false,
    );
  });
})();

const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");

password.addEventListener("input", () => {
  if (confirmPassword.value !== "") {
    confirmPassword.classList.toggle(
      "is-invalid",
      password.value !== confirmPassword.value,
    );
  }
});
confirmPassword.addEventListener("input", () => {
  if (password.value !== confirmPassword.value) {
    confirmPassword.classList.add("is-invalid");
  } else {
    confirmPassword.classList.remove("is-invalid");
  }
});
