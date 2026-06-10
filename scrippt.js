/* Typing Effect */

const text = "Java Developer | C++ Programmer | Web Developer";
const typing = document.getElementById("typing");

let i = 0;

function typeWriter() {
    if (i < text.length) {
        typing.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 80);
    }
}

typeWriter();

/* Experience Counter */

const startYear = 2021;
const currentYear = new Date().getFullYear();

document.getElementById("experience").textContent =
currentYear - startYear;

/* Scroll Animation */

const sections = document.querySelectorAll("section");

sections.forEach(section => {
    section.classList.add("hidden");
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

sections.forEach(section => {
    observer.observe(section);
});

/* Back to Top Button */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
