function scrollToSection() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}

const sections = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            section.classList.add("show");
        }
    });
});

/* Typing Animation */
const text = "Nilay Jyoti Rabha";
let index = 0;
const speed = 150;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, speed);
    }
}

window.addEventListener("load", typeEffect);
/* Scroll Progress Bar */
window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    document.getElementById("progress-bar").style.width = progress + "%";
});

/* Dark Mode Toggle */
const toggle = document.getElementById("dark-toggle");

// Load saved mode
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    toggle.textContent = "☀️";
}

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        toggle.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        toggle.textContent = "🌙";
    }
});

/* Blog Read More Toggle */
const readButtons = document.querySelectorAll(".read-btn");

readButtons.forEach(button => {
    button.addEventListener("click", () => {
        const fullText = button.previousElementSibling;

        fullText.classList.toggle("hidden");

        button.textContent = fullText.classList.contains("hidden")
            ? "Read More"
            : "Read Less";
    });
});
/* Blog Search */
const searchInput = document.getElementById("blog-search");
const blogCards = document.querySelectorAll(".blog-card");

searchInput.addEventListener("keyup", () => {
    const query = searchInput.value.toLowerCase();

    blogCards.forEach(card => {
        const text = card.innerText.toLowerCase();
        card.style.display = text.includes(query) ? "block" : "none";
    });
});


