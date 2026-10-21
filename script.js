const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", function () {
navLinks.classList.toggle("active");
});

document.querySelectorAll("#nav-links a").forEach(function (link) {
link.addEventListener("click", function () {
navLinks.classList.remove("active");
});
});

document.getElementById("year").textContent =
new Date().getFullYear();