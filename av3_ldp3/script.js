document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.getElementById("body");


    if (localStorage.getItem("darkMode") === "enabled") {
        enableDarkMode();
    }

    darkModeToggle.addEventListener("click", () => {
        if (body.classList.contains("dark-mode")) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });

    function enableDarkMode() {
        body.classList.add("dark-mode");
        updateNavbarTextColor("white");
        localStorage.setItem("darkMode", "enabled");
        updateImages();
    }

    function disableDarkMode() {
        body.classList.remove("dark-mode");
        localStorage.setItem("darkMode", null);
        updateImages();
    }

    function updateImages() {
        const images = document.querySelectorAll(".team-logo");
        images.forEach(image => {
            const mode = body.classList.contains("dark-mode") ? "dark" : "light";
            const team = image.dataset.team;
            const newImageSrc = `images/${team}-${mode}.png`;
            image.src = newImageSrc;
        });
    }
    function updateNavbarTextColor(color) {
        const navbarItems = document.querySelectorAll(".navbar a");
        navbarItems.forEach(item => {
            item.style.color = color;
        });
    }
});