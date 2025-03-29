/* script.js */ document.addEventListener("DOMContentLoaded", function() { const ctaButton = document.querySelector(".cta-btn"); ctaButton.addEventListener("mouseover", function() { ctaButton.style.backgroundColor = "#ff4f7c"; }); ctaButton.addEventListener("mouseout", function() { ctaButton.style.backgroundColor = "#ff758c"; }); });

function showDetails(property) { alert(You selected: ${property}. Contact us for more details!); }

document.querySelector(".contact-form").addEventListener("submit", function(event) { event.preventDefault(); alert("Thank you for reaching out! We'll get back to you soon."); });

