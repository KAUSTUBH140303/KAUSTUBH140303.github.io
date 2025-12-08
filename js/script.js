const toggleButton = document.getElementById("theme-toggle");
const root = document.documentElement;

// Set text label based on current theme
function updateToggleText(theme) {
  toggleButton.textContent = theme === "dark" ? "Light Theme" : "Dark Theme";
  // No color changes needed — CSS variables handle it.
}

// Load saved theme
const savedTheme = localStorage.getItem("theme") || "light";
root.setAttribute("data-theme", savedTheme);
updateToggleText(savedTheme);

// Toggle handler
toggleButton.addEventListener("click", () => {
  const currentTheme = root.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  root.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  updateToggleText(newTheme);
});
