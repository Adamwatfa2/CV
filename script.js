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

document.getElementById("experience").textContent =
new Date().getFullYear() - 2021;

/* Skill Bars */

window.addEventListener("load", () => {
    document.querySelector(".java").style.width = "90%";
    document.querySelector(".cpp").style.width = "85%";
    document.querySelector(".web").style.width = "95%";
});

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

/* Dark Mode */

document.getElementById("themeBtn").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

/* Particles Background */

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

for (let i = 0; i < 60; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        speed: Math.random() + 0.3
    });
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.5)";
        ctx.fill();

        p.y -= p.speed;

        if (p.y < 0) {
            p.y = canvas.height;
        }
    });

    requestAnimationFrame(animate);
}

animate();
