document.addEventListener("DOMContentLoaded", () => {

    const menuButton = document.getElementById("menuButton");
    const dropdownMenu = document.getElementById("dropdownMenu");

    // When the button is clicked, open/close the menu
    menuButton.addEventListener("click", () => {
        dropdownMenu.classList.toggle("open");
    });

});