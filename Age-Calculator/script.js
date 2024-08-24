const lightTheme = "light.css";
const darkTheme = "dark.css";
const sunIcon = "SunIcon.svg";
const moonIcon = "MoonIcon.svg";
const themeIcon = document.getElementById("theme-icon");
const calculateAgeBtn = document.getElementById('calculate-age');
const result = document.getElementById('result');

// Calculate Age Button
calculateAgeBtn.addEventListener('click', () => {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    result.textContent = `You are ${age} years old.`;
});

// Light/Dark Mode Toggle Button
function changeTheme() {
    const theme = document.getElementById("theme");
    if (theme.getAttribute("href") === lightTheme) {
        theme.setAttribute("href", darkTheme);
        themeIcon.setAttribute("src", sunIcon);
    } else {
        theme.setAttribute("href", lightTheme);
        themeIcon.setAttribute("src", moonIcon);
    }
}
function changeTheme() {
  const theme = document.getElementById("theme");
  
  if (theme.getAttribute("href") === lightTheme) {
    theme.setAttribute("href", darkTheme);
    themeIcon.setAttribute("src", sunIcon);
    toast.innerHTML = "Age Calculator";
    toast.innerHTML = "Dark Mode 🌙";
  } else {
    theme.setAttribute("href", lightTheme);
    themeIcon.setAttribute("src", moonIcon);
    toast.innerHTML = "Age Calculator";
    toast.innerHTML = "Light Mode ☀️";
  }

}