const text = "Java Developer | C++ Programmer | Web Developer";
const typing = document.getElementById("typing");

let i = 0;

function typeWriter(){
    if(i < text.length){
        typing.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter,80);
    }
}

typeWriter();

document.getElementById("experience").textContent =
new Date().getFullYear() - 2021;

window.addEventListener("load",()=>{
    document.querySelector(".java").style.width="90%";
    document.querySelector(".cpp").style.width="85%";
    document.querySelector(".web").style.width="95%";
});

const sections = document.querySelectorAll("section");

sections.forEach(section=>{
    section.classList.add("hidden");
});

const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

sections.forEach(section=>{
    observer.observe(section);
});

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{
    if(window.scrollY > 300){
        topBtn.style.display="block";
    }else{
        topBtn.style.display="none";
    }
});

topBtn.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});

document.getElementById("themeBtn").addEventListener("click",()=>{
    document.body.classList.toggle("dark-mode");
});

const canvas = document.getElementById("particles");
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
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        dx: (Math.random() - 0.5) * 1.5,
        dy: (Math.random() - 0.5) * 1.5,
        radius: Math.random() * 3 + 1
    });
}

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p=>{
        p.x += p.dx;
        p.y += p.dy;

        if(p.x < 0 || p.x > canvas.width){
            p.dx *= -1;
        }

        if(p.y < 0 || p.y > canvas.height){
            p.dy *= -1;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.8)";
        ctx.fill();
    });

    for(let a = 0; a < particles.length; a++){
        for(let b = a + 1; b < particles.length; b++){
            let dx = particles[a].x - particles[b].x;
            let dy = particles[a].y - particles[b].y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if(distance < 120){
                ctx.beginPath();
                ctx.moveTo(particles[a].x, particles[a].y);
                ctx.lineTo(particles[b].x, particles[b].y);
                ctx.strokeStyle = "rgba(255,255,255,0.15)";
                ctx.stroke();
            }
        }
    }

    requestAnimationFrame(animate);
}

animate();
