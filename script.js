// =============================
// NEWSLETTER FORM
// =============================

const newsletterForm = document.getElementById("newsletterForm");

if (newsletterForm) {
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const successMessage = document.getElementById("successMessage");

  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;

    emailError.textContent = "";
    successMessage.textContent = "";
    emailInput.classList.remove("input-error", "input-success");

    if (emailValue === "") {
      emailError.textContent = "Email is required.";
      emailInput.classList.add("input-error");
      return;
    }
    if (!emailPattern.test(emailValue)) {
      emailError.textContent = "Please enter a valid email address.";
      emailInput.classList.add("input-error");
      return;
    }
    emailInput.classList.add("input-success");
    successMessage.textContent = "Successfully subscribed!";
    newsletterForm.reset();
  });
}

// =============================
// LOGIN FORM
// =============================

const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    var loginEmail = document.getElementById("loginEmail");
    var loginPassword = document.getElementById("loginPassword");
    var loginEmailError = document.getElementById("loginEmailError");
    var loginPasswordError = document.getElementById("loginPasswordError");

    if (!loginEmail || !loginPassword) return;

    var emailValue = loginEmail.value.trim();
    var passwordValue = loginPassword.value.trim();
    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
    var isValid = true;

    if (loginEmailError) loginEmailError.textContent = "";
    if (loginPasswordError) loginPasswordError.textContent = "";
    loginEmail.classList.remove("input-error", "input-success");
    loginPassword.classList.remove("input-error", "input-success");

    if (emailValue === "") {
      if (loginEmailError) loginEmailError.textContent = "Email is required.";
      loginEmail.classList.add("input-error");
      isValid = false;
    } else if (!emailPattern.test(emailValue)) {
      if (loginEmailError)
        loginEmailError.textContent = "Please enter a valid email address.";
      loginEmail.classList.add("input-error");
      isValid = false;
    } else {
      loginEmail.classList.add("input-success");
    }

    if (passwordValue === "") {
      if (loginPasswordError)
        loginPasswordError.textContent = "Password is required.";
      loginPassword.classList.add("input-error");
      isValid = false;
    } else if (passwordValue.length < 6) {
      if (loginPasswordError)
        loginPasswordError.textContent =
          "Password must be at least 6 characters.";
      loginPassword.classList.add("input-error");
      isValid = false;
    } else {
      loginPassword.classList.add("input-success");
    }

    if (isValid) {
      localStorage.setItem("userEmail", emailValue);
      if (emailValue === "admin@refecire.com") {
        localStorage.setItem("userRole", "admin");
        window.location.href = "admin.html";
      } else {
        localStorage.setItem("userRole", "user");
        window.location.href = "gadgets.html";
      }
    }
  });
}

// =============================
// SIGNUP FORM
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

    signupNameError.textContent = "";
    signupEmailError.textContent = "";
    signupPasswordError.textContent = "";
    signupConfirmPasswordError.textContent = "";

    signupName.classList.remove("input-error", "input-success");
    signupEmail.classList.remove("input-error", "input-success");
    signupPassword.classList.remove("input-error", "input-success");
    signupConfirmPassword.classList.remove("input-error", "input-success");

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

    if (isValid) {
      localStorage.setItem("userName", nameValue);
      localStorage.setItem("userEmail", emailValue);
      localStorage.setItem("userRole", "user");
      window.location.href = "gadgets.html";
    }
  });
}

// =============================
// PROFILE PAGE
// =============================

const profileName = document.getElementById("profileName");
const profileEmail = document.getElementById("profileEmail");
const profileNameDetails = document.getElementById("profileNameDetails");
const profileEmailDetails = document.getElementById("profileEmailDetails");
const profileAddress = document.getElementById("profileAddress");

if (profileName) {
  const storedName = localStorage.getItem("userName");
  const storedEmail = localStorage.getItem("userEmail");
  const storedAddress = localStorage.getItem("userAddress");

  if (storedName) {
    profileName.textContent = storedName;
    profileNameDetails.textContent = storedName;
  }
  if (storedEmail) {
    profileEmail.textContent = storedEmail;
    profileEmailDetails.textContent = storedEmail;
  }
  if (storedAddress && profileAddress) {
    profileAddress.textContent = storedAddress;
  }
}

// =============================
// LOGOUT
// =============================

const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", function () {
    localStorage.clear();
  });
}

// =============================
// SETTINGS PAGE
// =============================

const saveSettings = document.getElementById("saveSettings");
if (saveSettings) {
  saveSettings.addEventListener("click", function () {
    const newEmail = document.getElementById("email").value;
    const newAddress = document.getElementById("address").value;
    if (newEmail) localStorage.setItem("userEmail", newEmail);
    if (newAddress) localStorage.setItem("userAddress", newAddress);
    alert("Settings updated successfully!");
  });
}

// =============================
// ADMIN: SHARED HELPERS
// =============================

function getUsers() {
  return JSON.parse(localStorage.getItem("refecire_users") || "[]");
}

function saveUsers(users) {
  localStorage.setItem("refecire_users", JSON.stringify(users));
}

function getNextId() {
  const users = getUsers();
  return users.length > 0
    ? Math.max.apply(
        null,
        users.map(function (u) {
          return u.id;
        }),
      ) + 1
    : 1;
}

function adminLogout() {
  localStorage.removeItem("userEmail");
  localStorage.removeItem("userRole");
  window.location.href = "login.html";
}

function setupAdminLogout() {
  const btn1 = document.getElementById("logoutBtn");
  const btn2 = document.getElementById("logoutBtn2");
  if (btn1) btn1.addEventListener("click", adminLogout);
  if (btn2) btn2.addEventListener("click", adminLogout);
}

function requireAdminAccess() {
  const email = localStorage.getItem("userEmail");
  const role = localStorage.getItem("userRole");
  if (!email) {
    window.location.href = "login.html";
    return false;
  }
  if (role !== "admin") {
    window.location.href = "profile.html";
    return false;
  }
  return true;
}

// =============================
// ADMIN: DASHBOARD (admin.html)
// =============================

(function () {
  const adminWelcome = document.getElementById("adminName");
  if (!adminWelcome) return;
  if (!requireAdminAccess()) return;

  const storedAdminName = localStorage.getItem("userName");
  if (storedAdminName) adminWelcome.textContent = storedAdminName;

  const allUsers = getUsers();
  document.getElementById("statTotal").textContent = allUsers.length;
  document.getElementById("statAdmins").textContent = allUsers.filter(
    function (u) {
      return u.role === "admin";
    },
  ).length;
  document.getElementById("statRegular").textContent = allUsers.filter(
    function (u) {
      return u.role === "user";
    },
  ).length;

  const recentBody = document.getElementById("recentUsersBody");
  const recentList = allUsers.slice().reverse().slice(0, 5);

  if (recentList.length === 0) {
    recentBody.innerHTML =
      '<tr><td colspan="4" style="text-align:center;opacity:0.5;padding:1.5rem;">No users yet. <a href="add-user.html" style="color:#00ffea;">Add one →</a></td></tr>';
  } else {
    recentBody.innerHTML = recentList
      .map(function (u) {
        return (
          "<tr>" +
          '<td style="opacity:0.5;">#' +
          u.id +
          "</td>" +
          "<td>" +
          u.name +
          "</td>" +
          "<td>" +
          u.email +
          "</td>" +
          '<td><span class="role-badge ' +
          (u.role === "admin" ? "role-admin" : "role-user") +
          '">' +
          u.role +
          "</span></td>" +
          "</tr>"
        );
      })
      .join("");
  }

  setupAdminLogout();
})();

// =============================
// ADMIN: MANAGE USERS (manage-users.html)
// =============================

(function () {
  const usersTableBody = document.getElementById("usersTableBody");
  if (!usersTableBody) return;
  if (!requireAdminAccess()) return;

  var pendingDeleteId = null;

  function renderUsersTable(users) {
    var countEl = document.getElementById("resultCount");
    if (countEl)
      countEl.textContent =
        users.length + " user" + (users.length !== 1 ? "s" : "") + " found";
    if (users.length === 0) {
      usersTableBody.innerHTML =
        '<tr><td colspan="5" style="text-align:center;opacity:0.5;padding:2rem;">No users found. <a href="add-user.html" style="color:#00ffea;">Add one →</a></td></tr>';
      return;
    }
    usersTableBody.innerHTML = users
      .map(function (u) {
        return (
          '<tr id="row-' +
          u.id +
          '">' +
          '<td style="opacity:0.5;">#' +
          u.id +
          "</td><td>" +
          u.name +
          "</td><td>" +
          u.email +
          "</td>" +
          '<td><span class="role-badge ' +
          (u.role === "admin" ? "role-admin" : "role-user") +
          '">' +
          u.role +
          "</span></td>" +
          '<td><button class="btn-delete" data-id="' +
          u.id +
          '" data-name="' +
          u.name.replace(/"/g, "&quot;") +
          '">Delete</button></td></tr>'
        );
      })
      .join("");
    usersTableBody.querySelectorAll(".btn-delete").forEach(function (btn) {
      btn.addEventListener("click", function () {
        openDeleteModal(Number(this.dataset.id), this.dataset.name);
      });
    });
  }

  function filterUsers() {
    var search = document.getElementById("searchInput").value.toLowerCase();
    var role = document.getElementById("roleFilter").value;
    renderUsersTable(
      getUsers().filter(function (u) {
        return (
          (u.name.toLowerCase().includes(search) ||
            u.email.toLowerCase().includes(search)) &&
          (!role || u.role === role)
        );
      }),
    );
  }

  function openDeleteModal(id, name) {
    pendingDeleteId = id;
    document.getElementById("deleteTargetName").textContent = name;
    document.getElementById("deleteModal").classList.add("show");
  }

  function closeDeleteModal() {
    pendingDeleteId = null;
    document.getElementById("deleteModal").classList.remove("show");
  }

  function confirmDeleteUser() {
    if (!pendingDeleteId) return;
    saveUsers(
      getUsers().filter(function (u) {
        return u.id !== pendingDeleteId;
      }),
    );
    closeDeleteModal();
    filterUsers();
    var alertEl = document.getElementById("alertMsg");
    if (alertEl) {
      alertEl.style.display = "block";
      alertEl.textContent = "✔ User deleted successfully.";
      setTimeout(function () {
        alertEl.style.display = "none";
      }, 3000);
    }
  }

  document.getElementById("searchInput").addEventListener("input", filterUsers);
  document.getElementById("roleFilter").addEventListener("change", filterUsers);
  document
    .getElementById("clearFiltersBtn")
    .addEventListener("click", function () {
      document.getElementById("searchInput").value = "";
      document.getElementById("roleFilter").value = "";
      filterUsers();
    });
  document
    .getElementById("modalCancelBtn")
    .addEventListener("click", closeDeleteModal);
  document
    .getElementById("modalConfirmBtn")
    .addEventListener("click", confirmDeleteUser);

  setupAdminLogout();
  renderUsersTable(getUsers());
})();

// =============================
// ADMIN: ADD USER (add-user.html)
// =============================

(function () {
  const addUserBtn = document.getElementById("addUserBtn");
  if (!addUserBtn) return;
  if (!requireAdminAccess()) return;

  var today = new Date().toISOString().split("T")[0];
  document.getElementById("prevDate").textContent = today;
  document.getElementById("prevId").textContent = "#" + getNextId();

  function updateAddPreview() {
    var name = document.getElementById("addName").value.trim();
    var email = document.getElementById("addEmail").value.trim();
    var role = document.getElementById("addRole").value;
    document.getElementById("prevName").textContent = name || "New User";
    document.getElementById("prevEmail").textContent =
      email || "email@example.com";
    document.getElementById("prevRole").textContent =
      role.charAt(0).toUpperCase() + role.slice(1);
    var badge = document.getElementById("prevRoleBadge");
    badge.textContent = role;
    badge.className =
      "role-badge " + (role === "admin" ? "role-admin" : "role-user");
  }

  function addNewUser() {
    var name = document.getElementById("addName").value.trim();
    var email = document.getElementById("addEmail").value.trim();
    var role = document.getElementById("addRole").value;
    var password = document.getElementById("addPassword").value;
    var confirm = document.getElementById("addConfirm").value;
    var emailPat = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
    var valid = true;

    ["errName", "errEmail", "errPassword", "errConfirm"].forEach(function (id) {
      document.getElementById(id).textContent = "";
    });
    ["addName", "addEmail", "addPassword", "addConfirm"].forEach(function (id) {
      document
        .getElementById(id)
        .classList.remove("input-error", "input-success");
    });

    if (!name || name.length < 2) {
      document.getElementById("errName").textContent =
        "Full name must be at least 2 characters.";
      document.getElementById("addName").classList.add("input-error");
      valid = false;
    } else {
      document.getElementById("addName").classList.add("input-success");
    }
    if (!email || !emailPat.test(email)) {
      document.getElementById("errEmail").textContent =
        "Please enter a valid email address.";
      document.getElementById("addEmail").classList.add("input-error");
      valid = false;
    } else if (
      getUsers().find(function (u) {
        return u.email.toLowerCase() === email.toLowerCase();
      })
    ) {
      document.getElementById("errEmail").textContent =
        "A user with this email already exists.";
      document.getElementById("addEmail").classList.add("input-error");
      valid = false;
    } else {
      document.getElementById("addEmail").classList.add("input-success");
    }
    if (!password || password.length < 6) {
      document.getElementById("errPassword").textContent =
        "Password must be at least 6 characters.";
      document.getElementById("addPassword").classList.add("input-error");
      valid = false;
    } else {
      document.getElementById("addPassword").classList.add("input-success");
    }
    if (!confirm || confirm !== password) {
      document.getElementById("errConfirm").textContent =
        "Passwords do not match.";
      document.getElementById("addConfirm").classList.add("input-error");
      valid = false;
    } else if (password && password.length >= 6) {
      document.getElementById("addConfirm").classList.add("input-success");
    }

    if (!valid) return;
    var users = getUsers();
    users.push({
      id: getNextId(),
      name: name,
      email: email,
      role: role,
      joined: today,
    });
    saveUsers(users);
    document.getElementById("modalUserName").textContent = name;
    document.getElementById("successModal").classList.add("show");
  }

  function resetAddForm() {
    ["addName", "addEmail", "addPassword", "addConfirm"].forEach(function (id) {
      document.getElementById(id).value = "";
      document
        .getElementById(id)
        .classList.remove("input-error", "input-success");
    });
    document.getElementById("addRole").selectedIndex = 0;
    ["errName", "errEmail", "errPassword", "errConfirm"].forEach(function (id) {
      document.getElementById(id).textContent = "";
    });
    document.getElementById("successModal").classList.remove("show");
    updateAddPreview();
    document.getElementById("prevId").textContent = "#" + getNextId();
  }

  addUserBtn.addEventListener("click", addNewUser);
  document
    .getElementById("addName")
    .addEventListener("input", updateAddPreview);
  document
    .getElementById("addEmail")
    .addEventListener("input", updateAddPreview);
  document
    .getElementById("addRole")
    .addEventListener("change", updateAddPreview);
  document
    .getElementById("addAnotherBtn")
    .addEventListener("click", resetAddForm);

  setupAdminLogout();
  updateAddPreview();
})();

// ==============================
// ==============================
// GADGET SHOP (gadgets.html)
// API: https://dummyjson.com/products/search?q=KEYWORD
// Public, free, no API key, safe for GitHub Pages
// Results filtered to electronics categories only
// ==============================

(function () {
  var searchBtn = document.getElementById("gadgetSearchBtn");
  var gadgetInput = document.getElementById("gadgetInput");
  if (!searchBtn || !gadgetInput) return;

  var gadgetGrid = document.getElementById("gadgetGrid");
  var errorBox = document.getElementById("gadgetErrorBox");
  var errorMsg = document.getElementById("gadgetErrorMsg");
  var loadingBox = document.getElementById("gadgetLoadingBox");
  var resultCount = document.getElementById("gadgetResultCount");

  // Electronics-only categories available in DummyJSON
  var ELECTRONICS_CATEGORIES = [
    "laptops",
    "smartphones",
    "tablets",
    "mobile-accessories",
  ];

  // --- UI STATE HELPERS ---

  function showLoading() {
    loadingBox.style.display = "block";
    errorBox.style.display = "none";
    gadgetGrid.innerHTML = "";
    resultCount.textContent = "";
  }

  function showError(message) {
    loadingBox.style.display = "none";
    errorBox.style.display = "block";
    errorMsg.textContent = message;
    gadgetGrid.innerHTML = "";
    resultCount.textContent = "";
  }

  function hideAll() {
    loadingBox.style.display = "none";
    errorBox.style.display = "none";
  }

  // --- LOCALSTORAGE HELPERS ---

  function getSavedGadgets() {
    return JSON.parse(localStorage.getItem("refecire_saved_gadgets") || "[]");
  }

  function saveGadget(data) {
    var saved = getSavedGadgets();
    // Prevent duplicates by product id
    if (
      saved.find(function (g) {
        return g.id === data.id;
      })
    )
      return false;
    saved.push(data);
    localStorage.setItem("refecire_saved_gadgets", JSON.stringify(saved));
    return true;
  }

  // --- TOAST NOTIFICATION ---

  function showToast(message, success) {
    var existing = document.getElementById("save-toast");
    if (existing) existing.remove();
    var toast = document.createElement("div");
    toast.id = "save-toast";
    toast.className =
      "save-toast " +
      (success ? "save-toast--success" : "save-toast--duplicate");
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(function () {
      toast.remove();
    }, 2500);
  }

  // --- BUILD STAR RATING ---

  function buildStars(rating) {
    if (!rating) return "";
    var full = Math.round(rating);
    var stars = "";
    for (var i = 0; i < 5; i++) stars += i < full ? "★" : "☆";
    return stars + " " + Number(rating).toFixed(1);
  }

  // --- BUILD ONE PRODUCT CARD ---

  function buildCard(product) {
    var saved = getSavedGadgets();
    var isSaved = !!saved.find(function (g) {
      return g.id === product.id;
    });

    var card = document.createElement("div");
    card.className = "gadget-card";

    card.innerHTML =
      '<div class="gadget-img-wrap">' +
      '<img class="gadget-img" src="' +
      product.thumbnail +
      '" alt="' +
      product.title +
      '" loading="lazy" />' +
      "</div>" +
      '<div class="gadget-card-body">' +
      '<div class="gadget-category">' +
      product.category +
      "</div>" +
      '<div class="gadget-title">' +
      product.title +
      "</div>" +
      '<div class="gadget-rating">' +
      buildStars(product.rating) +
      "</div>" +
      '<div class="gadget-price">$' +
      Number(product.price).toFixed(2) +
      "</div>" +
      '<button class="btn-save-gadget' +
      (isSaved ? " btn-save-gadget--saved" : "") +
      '"' +
      (isSaved ? " disabled" : "") +
      ">" +
      (isSaved ? "✓ Saved" : "★ Save Gadget") +
      "</button>" +
      "</div>";

    var saveBtn = card.querySelector(".btn-save-gadget");
    saveBtn.addEventListener("click", function () {
      var result = saveGadget({
        id: product.id,
        title: product.title,
        price: product.price,
        category: product.category,
        thumbnail: product.thumbnail,
        rating: product.rating,
      });
      if (result) {
        saveBtn.textContent = "✓ Saved";
        saveBtn.disabled = true;
        saveBtn.classList.add("btn-save-gadget--saved");
        showToast("✓ " + product.title.substring(0, 35) + "... saved!", true);
      } else {
        showToast("Already saved.", false);
      }
    });

    return card;
  }

  // --- RENDER RESULTS ---

  function renderProducts(products) {
    hideAll();
    if (!products || products.length === 0) {
      showError(
        "No electronics found. Try: Laptop, Phone, Tablet, or Headphones.",
      );
      return;
    }
    resultCount.textContent =
      products.length +
      " product" +
      (products.length !== 1 ? "s" : "") +
      " found";
    gadgetGrid.innerHTML = "";
    products.forEach(function (p) {
      gadgetGrid.appendChild(buildCard(p));
    });
  }

  // --- MAIN SEARCH ---
  // Calls DummyJSON search then filters to electronics categories only

  function searchGadgets(query) {
    if (!query || query.trim() === "") {
      showError("Please enter a product name to search.");
      return;
    }
    if (query.trim().length < 2) {
      showError("Please enter at least 2 characters.");
      return;
    }

    showLoading();

    // Fetch with limit=100 so we get enough results before filtering
    var apiUrl =
      "https://dummyjson.com/products/search?q=" +
      encodeURIComponent(query.trim()) +
      "&limit=100";

    fetch(apiUrl)
      .then(function (response) {
        if (!response.ok) {
          throw new Error(
            "Request failed with status " +
              response.status +
              ". Please try again.",
          );
        }
        return response.json();
      })
      .then(function (data) {
        // Filter results to electronics categories only
        var electronics = (data.products || []).filter(function (p) {
          return ELECTRONICS_CATEGORIES.indexOf(p.category) !== -1;
        });

        if (electronics.length === 0) {
          showError(
            'No electronics found for "' +
              query.trim() +
              '". Try: Laptop, Phone, Tablet, or Headphones.',
          );
          return;
        }

        renderProducts(electronics);
      })
      .catch(function (error) {
        if (error.message === "Failed to fetch") {
          showError(
            "Network error. Please check your internet connection and try again.",
          );
        } else {
          showError(error.message);
        }
      });
  }

  // --- EVENT LISTENERS ---

  searchBtn.addEventListener("click", function () {
    searchGadgets(gadgetInput.value);
  });

  gadgetInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") searchGadgets(gadgetInput.value);
  });

  document.querySelectorAll(".cat-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var query = this.dataset.q;
      gadgetInput.value = query;
      document.querySelectorAll(".cat-btn").forEach(function (b) {
        b.classList.remove("active");
      });
      this.classList.add("active");
      searchGadgets(query);
    });
  });
})();

// SAVED GADGETS (saved-gadgets.html)
// ==============================

(function () {
  var savedGrid = document.getElementById("savedGadgetGrid");
  if (!savedGrid) return;

  function getSavedGadgets() {
    return JSON.parse(localStorage.getItem("refecire_saved_gadgets") || "[]");
  }

  function deleteGadget(id) {
    var updated = getSavedGadgets().filter(function (g) {
      return g.id !== id;
    });
    localStorage.setItem("refecire_saved_gadgets", JSON.stringify(updated));
  }

  function buildStars(rating) {
    if (!rating) return "";
    var full = Math.round(rating);
    var stars = "";
    for (var i = 0; i < 5; i++) stars += i < full ? "★" : "☆";
    return stars + " " + Number(rating).toFixed(1);
  }

  function renderSaved() {
    var saved = getSavedGadgets();
    var emptyEl = document.getElementById("savedGadgetEmpty");
    var countEl = document.getElementById("savedGadgetCount");

    if (saved.length === 0) {
      savedGrid.innerHTML = "";
      emptyEl.style.display = "block";
      countEl.textContent = "";
      return;
    }

    emptyEl.style.display = "none";
    countEl.textContent =
      saved.length + " saved gadget" + (saved.length !== 1 ? "s" : "");
    savedGrid.innerHTML = "";

    saved.forEach(function (g) {
      var card = document.createElement("div");
      card.className = "gadget-card";

      card.innerHTML =
        '<div class="gadget-img-wrap">' +
        '<img class="gadget-img" src="' +
        g.thumbnail +
        '" alt="' +
        g.title +
        '" loading="lazy" />' +
        "</div>" +
        '<div class="gadget-card-body">' +
        '<div class="gadget-category">' +
        g.category +
        "</div>" +
        '<div class="gadget-title">' +
        g.title +
        "</div>" +
        '<div class="gadget-rating">' +
        buildStars(g.rating) +
        "</div>" +
        '<div class="gadget-price">$' +
        Number(g.price).toFixed(2) +
        "</div>" +
        '<button class="btn-delete-gadget" data-id="' +
        g.id +
        '">✕ Remove</button>' +
        "</div>";

      card
        .querySelector(".btn-delete-gadget")
        .addEventListener("click", function () {
          deleteGadget(Number(this.dataset.id));
          renderSaved();
        });

      savedGrid.appendChild(card);
    });
  }

  // Clear all button
  var clearBtn = document.getElementById("clearAllGadgetsBtn");
  if (clearBtn) {
    clearBtn.addEventListener("click", function () {
      localStorage.removeItem("refecire_saved_gadgets");
      renderSaved();
    });
  }

  renderSaved();
})();
