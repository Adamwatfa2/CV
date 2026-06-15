// Typing effect
const text = "Java Developer | C++ Programmer | Web Developer";
const typing = document.getElementById("typing");

if (typing) {
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typing.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 80);
        }
    }

    typeWriter();
}

// Experience years
const experience = document.getElementById("experience");

if (experience) {
    experience.textContent = new Date().getFullYear() - 2021;
}

// Skill bars
window.addEventListener("load", () => {

    const java = document.querySelector(".java");
    const cpp = document.querySelector(".cpp");
    const web = document.querySelector(".web");

    if(java) java.style.width = "90%";
    if(cpp) cpp.style.width = "85%";
    if(web) web.style.width = "95%";
});

// Show sections
const sections = document.querySelectorAll("section");

sections.forEach(section => {
    section.classList.add("hidden");
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

sections.forEach(section => {
    observer.observe(section);
});

// Scroll button
const topBtn = document.getElementById("topBtn");

if(topBtn){

    window.addEventListener("scroll", () => {
        topBtn.style.display =
            window.scrollY > 300 ? "block" : "none";
    });

    topBtn.addEventListener("click", () => {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    });
}

// Dark mode
const themeBtn = document.getElementById("themeBtn");

if(themeBtn){
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
}

// Music
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

if(musicBtn && bgMusic){

    let playing = false;

    musicBtn.addEventListener("click", () => {

        if(!playing){
            bgMusic.play();
            musicBtn.textContent = "🔇";
            playing = true;
        }else{
            bgMusic.pause();
            musicBtn.textContent = "🎵";
            playing = false;
        }

    });
}

// Particles background
const canvas = document.getElementById("particles");

if(canvas){

    const ctx = canvas.getContext("2d");

    function resizeCanvas(){
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles = [];

    for(let i = 0; i < 80; i++){

        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            dx: (Math.random() - 0.5) * 1.5,
            dy: (Math.random() - 0.5) * 1.5,
            radius: Math.random() * 3 + 1
        });

    }

    function animate(){

        ctx.clearRect(0,0,canvas.width,canvas.height);

        particles.forEach(p => {

            p.x += p.dx;
            p.y += p.dy;

            if(p.x < 0 || p.x > canvas.width) p.dx *= -1;
            if(p.y < 0 || p.y > canvas.height) p.dy *= -1;

            ctx.beginPath();
            ctx.arc(p.x,p.y,p.radius,0,Math.PI*2);
            ctx.fillStyle = "rgba(255,255,255,0.8)";
            ctx.fill();

        });

        for(let a = 0; a < particles.length; a++){

            for(let b = a + 1; b < particles.length; b++){

                let dx = particles[a].x - particles[b].x;
                let dy = particles[a].y - particles[b].y;

                let distance =
                    Math.sqrt(dx*dx + dy*dy);

                if(distance < 120){

                    ctx.beginPath();
                    ctx.moveTo(
                        particles[a].x,
                        particles[a].y
                    );

                    ctx.lineTo(
                        particles[b].x,
                        particles[b].y
                    );

                    ctx.strokeStyle =
                        "rgba(255,255,255,0.15)";

                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(animate);
    }

    animate();
}
