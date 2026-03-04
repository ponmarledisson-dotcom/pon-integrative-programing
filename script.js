const form = document.getElementById("newsletterForm");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");
const successMessage = document.getElementById("successMessage");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;

    // Reset
    emailError.textContent = "";
    successMessage.textContent = "";
    emailInput.classList.remove("input-error", "input-success");

    // Empty check
    if (emailValue === "") {
      emailError.textContent = "Email is required.";
      emailInput.classList.add("input-error");
      return;
    }

    // Email format check
    if (!emailPattern.test(emailValue)) {
      emailError.textContent = "Please enter a valid email address.";
      emailInput.classList.add("input-error");
      return;
    }

    // Success
    emailInput.classList.add("input-success");
    successMessage.textContent = "Successfully subscribed!";
    form.reset();
  });
}

// =============================
// LOGIN FORM VALIDATION
// =============================

const loginForm = document.getElementById("loginForm");

if (loginForm) {
  const loginEmail = document.getElementById("loginEmail");
  const loginPassword = document.getElementById("loginPassword");
  const loginEmailError = document.getElementById("loginEmailError");
  const loginPasswordError = document.getElementById("loginPasswordError");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailValue = loginEmail.value.trim();
    const passwordValue = loginPassword.value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;

    // Reset
    loginEmailError.textContent = "";
    loginPasswordError.textContent = "";
    loginEmail.classList.remove("input-error", "input-success");
    loginPassword.classList.remove("input-error", "input-success");

    let isValid = true;

    // Email validation
    if (emailValue === "") {
      loginEmailError.textContent = "Email is required.";
      loginEmail.classList.add("input-error");
      isValid = false;
    } else if (!emailPattern.test(emailValue)) {
      loginEmailError.textContent = "Please enter a valid email address.";
      loginEmail.classList.add("input-error");
      isValid = false;
    } else {
      loginEmail.classList.add("input-success");
    }

    // Password validation
    if (passwordValue === "") {
      loginPasswordError.textContent = "Password is required.";
      loginPassword.classList.add("input-error");
      isValid = false;
    } else if (passwordValue.length < 6) {
      loginPasswordError.textContent =
        "Password must be at least 6 characters.";
      loginPassword.classList.add("input-error");
      isValid = false;
    } else {
      loginPassword.classList.add("input-success");
    }

    // If valid → Redirect
    if (isValid) {
      // Save user data
      localStorage.setItem("userName", nameValue);
      localStorage.setItem("userEmail", emailValue);

      // Redirect
      localStorage.setItem("userEmail", emailValue);
      window.location.href = "profile.html";
    }
  });
}
// =============================
// SIGNUP FORM VALIDATION
// =============================

const signupForm = document.getElementById("signupForm");

if (signupForm) {
  const signupName = document.getElementById("signupName");
  const signupEmail = document.getElementById("signupEmail");
  const signupPassword = document.getElementById("signupPassword");
  const signupConfirmPassword = document.getElementById(
    "signupConfirmPassword",
  );

  const signupNameError = document.getElementById("signupNameError");
  const signupEmailError = document.getElementById("signupEmailError");
  const signupPasswordError = document.getElementById("signupPasswordError");
  const signupConfirmPasswordError = document.getElementById(
    "signupConfirmPasswordError",
  );

  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const nameValue = signupName.value.trim();
    const emailValue = signupEmail.value.trim();
    const passwordValue = signupPassword.value.trim();
    const confirmPasswordValue = signupConfirmPassword.value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;

    let isValid = true;

    // Reset errors
    signupNameError.textContent = "";
    signupEmailError.textContent = "";
    signupPasswordError.textContent = "";
    signupConfirmPasswordError.textContent = "";

    signupName.classList.remove("input-error", "input-success");
    signupEmail.classList.remove("input-error", "input-success");
    signupPassword.classList.remove("input-error", "input-success");
    signupConfirmPassword.classList.remove("input-error", "input-success");

    // Name validation
    if (nameValue === "") {
      signupNameError.textContent = "Full name is required.";
      signupName.classList.add("input-error");
      isValid = false;
    } else if (nameValue.length < 3) {
      signupNameError.textContent = "Name must be at least 3 characters.";
      signupName.classList.add("input-error");
      isValid = false;
    } else {
      signupName.classList.add("input-success");
    }

    // Email validation
    if (emailValue === "") {
      signupEmailError.textContent = "Email is required.";
      signupEmail.classList.add("input-error");
      isValid = false;
    } else if (!emailPattern.test(emailValue)) {
      signupEmailError.textContent = "Please enter a valid email.";
      signupEmail.classList.add("input-error");
      isValid = false;
    } else {
      signupEmail.classList.add("input-success");
    }

    // Password validation
    if (passwordValue === "") {
      signupPasswordError.textContent = "Password is required.";
      signupPassword.classList.add("input-error");
      isValid = false;
    } else if (passwordValue.length < 6) {
      signupPasswordError.textContent =
        "Password must be at least 6 characters.";
      signupPassword.classList.add("input-error");
      isValid = false;
    } else {
      signupPassword.classList.add("input-success");
    }

    // Confirm password validation
    if (confirmPasswordValue === "") {
      signupConfirmPasswordError.textContent = "Please confirm your password.";
      signupConfirmPassword.classList.add("input-error");
      isValid = false;
    } else if (confirmPasswordValue !== passwordValue) {
      signupConfirmPasswordError.textContent = "Passwords do not match.";
      signupConfirmPassword.classList.add("input-error");
      isValid = false;
    } else {
      signupConfirmPassword.classList.add("input-success");
    }

    // If valid → Redirect
    if (isValid) {
      // Save user data
      localStorage.setItem("userName", nameValue);
      localStorage.setItem("userEmail", emailValue);

      // Redirect
      localStorage.setItem("userEmail", emailValue);
      window.location.href = "profile.html";
    }
  });
}
// =============================
// PROFILE PAGE DATA LOAD
// =============================
const logoutBtn = document.getElementById("logoutBtn");
const profileAddress = document.getElementById("profileAddress");

if (logoutBtn) {
  logoutBtn.addEventListener("click", function () {
    localStorage.clear();
  });
}

const profileName = document.getElementById("profileName");
const profileEmail = document.getElementById("profileEmail");
const profileNameDetails = document.getElementById("profileNameDetails");
const profileEmailDetails = document.getElementById("profileEmailDetails");

if (profileName) {
  const storedAddress = localStorage.getItem("userAddress");

  if (storedAddress && profileAddress) {
    profileAddress.textContent = storedAddress;
  }
  const storedName = localStorage.getItem("userName");
  const storedEmail = localStorage.getItem("userEmail");

  if (storedName) {
    profileName.textContent = storedName;
    profileNameDetails.textContent = storedName;
  }

  if (storedEmail) {
    profileEmail.textContent = storedEmail;
    profileEmailDetails.textContent = storedEmail;
  }
}
// =============================
// SETTINGS PAGE SAVE
// =============================

const saveSettings = document.getElementById("saveSettings");

if (saveSettings) {
  saveSettings.addEventListener("click", function () {
    const newEmail = document.getElementById("email").value;
    const newAddress = document.getElementById("address").value;

    if (newEmail) {
      localStorage.setItem("userEmail", newEmail);
    }

    if (newAddress) {
      localStorage.setItem("userAddress", newAddress);
    }

    alert("Settings updated successfully!");
  });
}
