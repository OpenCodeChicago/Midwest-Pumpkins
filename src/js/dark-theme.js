const themeToggleBtn = document.querySelector(".dark-theme-icon");

themeToggleBtn.onclick = function () {
  document.body.classList.toggle("dark-mode");
  const isDarkMode = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode);
};

const darkMode = localStorage.getItem("darkMode");
if (darkMode === "true") {
  document.body.classList.toggle("dark-mode");
}
