const form = document.getElementById("signIn");
const emailField = document.getElementById("email");
const emailError = document.getElementById("emailError");
const passwordField = document.getElementById("password");
const passwordError = document.getElementById("passwordError");
const togglePassword = document.getElementById("togglePassword");

function resetFields() {
  emailError.innerHTML = "";
  emailField.parentElement.classList.remove("invalid");

  passwordError.innerHTML = "";
  passwordField.parentElement.classList.remove("invalid");
}

function checkFormValidity() {
  return emailError.innerHTML === "" && passwordError.innerHTML === "";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  resetFields();

  let emailValue = emailField.value.trim();
  let passwordValue = passwordField.value.trim();

  if (emailValue === "") {
    emailError.innerHTML = "Endereço de e-mail é obrigatório";
    emailField.parentElement.classList.add("invalid");
  } else if (!/\S+@\S+\.\S+/.test(emailValue)) {
    emailError.innerHTML = "Digite um e-mail válido";
    emailField.parentElement.classList.add("invalid");
  }

  if (passwordValue === "") {
    passwordError.innerHTML = "Senha é obrigatório";
    passwordField.parentElement.classList.add("invalid");
  }

  if (checkFormValidity()) {
    console.info("✅ Login realizado com sucesso");
  }
});

togglePassword.addEventListener("click", () => {
  const passwordInputType = passwordField.getAttribute("type");
  const icon = togglePassword.querySelector("img");

  if (passwordInputType === "password") {
    passwordField.setAttribute("type", "text");
    icon.src = "./images/eye-off.svg";
  } else {
    passwordField.setAttribute("type", "password");
    icon.src = "./images/eye.svg";
  }
});
