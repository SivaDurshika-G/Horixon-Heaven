document.addEventListener("DOMContentLoaded", () => {
    console.log("Horixon Heaven Loaded!");

    document.querySelector(".cta-btn").addEventListener("click", () => {
        alert("Welcome to Horixon Heaven! Explore our stunning properties.");
    });

    document.querySelectorAll(".property button").forEach(button => {
        button.addEventListener("click", event => {
            let propertyName = event.target.previousElementSibling.previousElementSibling.textContent;
            showDetails(propertyName);
        });
    });

    function showDetails(propertyName) {
        alert(`More details about ${propertyName} coming soon!`);
    }

    document.querySelector(".contact-form").addEventListener("submit", event => {
        event.preventDefault();
        alert("Thank you for contacting Horixon Heaven! We will get back to you soon.");
    });
});