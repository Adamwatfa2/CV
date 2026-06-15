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

document.getElementById("experience").textContent =
new Date().getFullYear() - 2021;

window.addEventListener("load", () => {
    document.querySelector(".java").style.width = "95%";
    document.querySelector(".cpp").style.width = "50%";
    document.querySelector(".web").style.width = "40%";
});

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

document.getElementById("themeBtn").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

let playing = false;

musicBtn.addEventListener("click", () => {
    if (!playing) {
        bgMusic.play();
        musicBtn.textContent = "🔇";
        playing = true;
    } else {
        bgMusic.pause();
        musicBtn.textContent = "🎵";
        playing = false;
    }
});

/* 3D PARTICLE BACKGROUND */

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const particles = [];

for (let i = 0; i < 100; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2,
        radius: Math.random() * 3 + 1
    });
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {

        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.8)";
        ctx.fill();
    });

    for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {

            let dx = particles[a].x - particles[b].x;
            let dy = particles[a].y - particles[b].y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 120) {
                ctx.beginPath();
                ctx.moveTo(particles[a].x, particles[a].y);
                ctx.lineTo(particles[b].x, particles[b].y);
                ctx.strokeStyle = "rgba(255,255,255,0.15)";
                ctx.stroke();
            }
       article{
    background:#f0fdf4;
    padding:15px;
    border-left:5px solid #10b981;
    border-radius:8px;
    margin-bottom:15px;
    transition:all 0.3s ease;
    cursor:pointer;
}

article:hover{
    transform:translateX(10px);
    box-shadow:0 10px 25px rgba(0,0,0,0.25);
} }
    }

    requestAnimationFrame(animate);
}

animate();
