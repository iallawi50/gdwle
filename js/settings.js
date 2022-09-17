window.localStorage.week !== undefined
  ? (document.querySelector(".copyjson").value = window.localStorage.week)
  : "";

// copy JSON
document.querySelector(".copybutton").addEventListener("click", () => {
  navigator.clipboard.writeText(document.querySelector(".copyjson").value);
  document.querySelector(".copybutton").textContent = "تم النسخ";
  setTimeout(() => {
    document.querySelector(".copybutton").textContent = "نسخ الكود";
  }, 3000);
});

// dark mode
let button = document.querySelector(".darkmode-button");

if (window.localStorage.darkmode) {
  if (window.localStorage.darkmode == "true") {
    button.checked = true;
  } else {
    button.checked = false;
  }
}

button.addEventListener("change", () => {
  window.localStorage.darkmode = button.checked;
  if (button.checked === true) {
    window.localStorage.setItem("background", "#143D43");
    window.localStorage.setItem("color", "#fff");
    document.body.style.background = window.localStorage.background;
    document.body.style.color = window.localStorage.color;
  } else {
    window.localStorage.setItem("background", "#fff");
    window.localStorage.setItem("color", "#000");
    document.body.style.background = window.localStorage.background;
    document.body.style.color = window.localStorage.color;
  }
});

document.querySelector(".delete").addEventListener("click", () => {
  showAlertWarning();
});

function showAlertWarning() {
  scrollTo(0, 0);

  document.body.style.overflow = "hidden";
  let alert = document.querySelector(".alert");
  alert.style.display = "block";

  document
    .querySelector(".alert .cancelDelete")
    .addEventListener("click", () => {
      alert.style.display = "none";
      document.body.style.overflow = "auto";
    });
  document
    .querySelector(".alert .confirmDelete")
    .addEventListener("click", () => {
      window.localStorage.removeItem("week");

      alert.style.display = "none";
      document.body.style.overflow = "auto";
      document.querySelector(".copyjson").value = '';
    });
}
