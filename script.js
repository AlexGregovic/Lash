




// Function for smooth scrolling
function smoothScroll(event) {
    const targetId = event.target.getAttribute("href");
    if (targetId && targetId !== "#") {
        const targetSection = document.querySelector(targetId);
        const headerHeight = document.querySelector("header").offsetHeight;
        const offsetTop = targetSection.offsetTop - headerHeight;

        window.scroll({
            top: offsetTop,
            behavior: "smooth",
            duration: 10000 // Adjust the duration here (in milliseconds)
        });
        event.preventDefault(); // Prevent default behavior only for navigation links
    }
}

// Add smooth scrolling to navigation links
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => {
    link.addEventListener("click", smoothScroll);
});

// Add smooth scrolling to CTA button
const ctaButton = document.querySelector(".cta-button");
ctaButton.addEventListener("click", (event) => {
    smoothScroll(event);
});

// Add smooth scrolling to hero button
const heroButton = document.querySelector(".hero .cta-button");
heroButton.addEventListener("click", (event) => {
    smoothScroll(event);
});

// Add countdown functionality
const countdownDate = new Date("April 14, 2024 00:10:00").getTime();
const countdownClock = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("daysnumber").innerHTML = formatTime(days);
    document.querySelector("#hours span").innerHTML = formatTime(hours);
    document.querySelector("#minutes span").innerHTML = formatTime(minutes);
    document.querySelector("#seconds span").innerHTML = formatTime(seconds);
    
    if (distance < 0) {
        clearInterval(countdownClock);
        document.getElementById("countdown-clock").innerHTML = "EXPIRED";
    }
}, 1000);

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

// ScrollReveal animation
ScrollReveal({
    reset: true,
    distance: "60px",
    duration: 2500,
    delay: 100
});

ScrollReveal().reveal(".homes .info h2", { delay: 500, origin: "left" });
ScrollReveal().reveal(".homes .info h3, .homes .info p, .about-info .btn", { delay: 600, origin: "right" });
ScrollReveal().reveal(".homes .info .btn", { delay: 700, origin: "bottom" });
ScrollReveal().reveal(".container h3", { delay: 500, origin: "left" });
// Portfolio modal functionality
const portfolioModals = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

function portfolioModal(modalClick) {
    portfolioModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        portfolioModal(i);
    });
});

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener("click", () => {
        portfolioModals.forEach((portfolioModalView) => {
            portfolioModalView.classList.remove("active");
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.querySelector('.toggle-btn');
    const sidebar = document.querySelector('.sidebar');

    toggleBtn.addEventListener('click', function () {
        sidebar.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Show pop-up after 1 second
    setTimeout(showPopup, 1000);

    const toggleBtn = document.querySelector('.toggle-btn');
    const sidebar = document.querySelector('.sidebar');

    toggleBtn.addEventListener('click', function () {
        sidebar.classList.toggle('active');
    });
});

function showPopup() {
    const popup = document.getElementById('popup');
    popup.classList.remove('hidden');
    // Hide pop-up after 4 seconds
    setTimeout(function () {
        popup.classList.add('hidden');
    }, 4000);
}
