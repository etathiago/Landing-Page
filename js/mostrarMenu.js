<<<<<<< HEAD
function mostrarMenu () {
=======
function mostrarMenu() {
>>>>>>> 79d14bb173153fe8a39dffc546a8825767f67906
    var menu = document.getElementById("menu-header");
    var icone = document.getElementById("icone-menu");

    if (getComputedStyle(menu).display == 'none') {
        menu.style.display = "flex";
        icone.classList.remove("fa-bars");
        icone.classList.add("fa-times");
        // Muda para times
    } else {
        menu.style.display = "none";
        icone.classList.remove("fa-times");
        icone.classList.add("fa-bars");
<<<<<<< HEAD
        // Muda para bars
=======
        // Muda para Bars
>>>>>>> 79d14bb173153fe8a39dffc546a8825767f67906
    }
}