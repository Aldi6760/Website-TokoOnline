document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar");

    if (menuIcon && navbar) {
        menuIcon.addEventListener("click", function () {
            console.log("Menu diklik!"); // Cek di console
            navbar.classList.toggle("active");
        });
    } else {
        console.log("Elemen tidak ditemukan!");
    }
});
