document.addEventListener("DOMContentLoaded", function () { // Smooth Scroll for Navigation Links document.querySelectorAll("nav ul li a").forEach(anchor => { anchor.addEventListener("click", function (e) { e.preventDefault(); const targetId = this.getAttribute("href").substring(1); document.getElementById(targetId).scrollIntoView({ behavior: "smooth" }); }); });

// Fade-in animation for properties
const properties = document.querySelectorAll(".property");
function fadeInOnScroll() {
    properties.forEach(property => {
        const rect = property.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            property.classList.add("visible");
        }
    });
}
window.addEventListener("scroll", fadeInOnScroll);
fadeInOnScroll(); // Initial check

// Slide-in animation for services
const services = document.querySelectorAll(".service");
function slideInOnScroll() {
    services.forEach(service => {
        const rect = service.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            service.classList.add("visible");
        }
    });
}
window.addEventListener("scroll", slideInOnScroll);
slideInOnScroll(); // Initial check

// Contact Form Submission Alert
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for contacting us! We will get back to you soon.");
    this.reset();
});

});

