let isDarkMode = false;

function DarkMode() {
    var darkModeBtn = document.getElementById("darkModeBtn");
    var buttons = document.getElementsByName("btn");
    var top = document.getElementsByName("top");
    isDarkMode = !isDarkMode;

    if (isDarkMode) {
        document.body.style.backgroundColor = "rgb(56,56,56)";
        document.body.style.color = "#C0C0C0";
        darkModeBtn.style.backgroundColor = "#C0C0C0";
        darkModeBtn.style.color = "rgb(56,56,56)";
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.backgroundColor = "#C0C0C0";
            buttons[i].style.color = "rgb(56,56,56)";
        }
        for (var i = 0; i < top.length; i++) {
            top[i].style.color = "#C0C0C0";
        }
    }
    else {
        document.body.style.backgroundColor = "#C0C0C0";
        document.body.style.color = "rgb(56,56,56)";
        darkModeBtn.style.backgroundColor = "rgb(56,56,56)";
        darkModeBtn.style.color = "#C0C0C0";
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.backgroundColor = "rgb(56,56,56)";
            buttons[i].style.color = "#C0C0C0";
        }
        for (var i = 0; i < top.length; i++) {
            top[i].style.color = "rgb(56,56,56)";
        }
    }
}

window.onload = DarkMode();
