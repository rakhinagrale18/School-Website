/* =========================================
        HAMBURGER MENU
========================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (navMenu.classList.contains("active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");

        } else {

            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");

        }

    });

}

/* =========================================
      CLOSE MENU AFTER CLICK
========================================= */

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");

    });

});

/* =========================================
        SMOOTH SCROLL
========================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/* =========================================
        LEARN MORE BUTTON
========================================= */

const learnBtn = document.getElementById("learnMoreBtn");

if(learnBtn){

learnBtn.addEventListener("click",()=>{

    document.querySelector(".learning").scrollIntoView({

        behavior:"smooth"

    });

});

}

/* =========================================
     DOWNLOAD CURRICULUM
========================================= */

const downloadBtn = document.getElementById("downloadBtn");

if(downloadBtn){

downloadBtn.addEventListener("click",()=>{

const curriculum = `

LUMORA INTERNATIONAL SCHOOL

ACADEMIC CURRICULUM

----------------------------------

PRIMARY SCHOOL

• English
• Mathematics
• EVS
• Art
• Music

----------------------------------

MIDDLE SCHOOL

• English
• Mathematics
• Science
• Social Science
• Computer Science

----------------------------------

SENIOR SECONDARY

Science Stream

Commerce Stream

Humanities Stream

----------------------------------

Thank You

`;

const blob = new Blob([curriculum],{

type:"text/plain"

});

const link = document.createElement("a");

link.href = URL.createObjectURL(blob);

link.download="Lumora_Curriculum.txt";

document.body.appendChild(link);

link.click();

document.body.removeChild(link);

});

}

/* =========================================
        STICKY HEADER
========================================= */

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>80){

header.style.background="rgba(10,42,102,.97)";

header.style.boxShadow="0 10px 30px rgba(0,0,0,.18)";

}

else{

header.style.background="rgba(10,42,102,.88)";

header.style.boxShadow="0 5px 25px rgba(0,0,0,.15)";

}

});
/* ==========================================
        SCROLL REVEAL ANIMATION
========================================== */

const revealElements = document.querySelectorAll(
".curriculum-card, .subject-card, .faculty-card, .why-card, .testimonial-card, .achievement-box"
);

const revealObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.2
});

revealElements.forEach(el=>{

el.classList.add("hidden");

revealObserver.observe(el);

});

/* ==========================================
        COUNTER ANIMATION
========================================== */

const counters = document.querySelectorAll(".achievement-box h3");

const speed = 200;

const counterObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter = entry.target;

const target = parseInt(counter.innerText);

let count = 0;

const updateCounter = ()=>{

const increment = target / speed;

if(count < target){

count += increment;

counter.innerText = Math.ceil(count);

requestAnimationFrame(updateCounter);

}
else{

counter.innerText = target + "+";

}

};

updateCounter();

counterObserver.unobserve(counter);

}

});

},{threshold:0.6});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

/* ==========================================
        ACTIVE NAVIGATION
========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll",()=>{

let current = "";

sections.forEach(section=>{

const sectionTop = section.offsetTop - 120;

if(window.scrollY >= sectionTop){

current = section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){

link.classList.add("active");

}

});

});

/* ==========================================
        BUTTON RIPPLE EFFECT
========================================== */

document.querySelectorAll(".primary-btn,.secondary-btn,.profile-btn,.learn-btn")
.forEach(button=>{

button.addEventListener("click",function(e){

const ripple = document.createElement("span");

const rect = this.getBoundingClientRect();

ripple.style.left = e.clientX - rect.left + "px";

ripple.style.top = e.clientY - rect.top + "px";

ripple.className = "ripple";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

/* ==========================================
        IMAGE HOVER EFFECT
========================================== */

document.querySelectorAll(".faculty-card img").forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.08)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});

/* ==========================================
        PAGE LOAD ANIMATION
========================================== */

window.addEventListener("load",()=>{

document.body.style.opacity="0";

setTimeout(()=>{

document.body.style.transition="opacity .8s ease";

document.body.style.opacity="1";

},100);

});

/* ==========================================
        CONSOLE MESSAGE
========================================== */

console.log("Lumora International School Academics Page Loaded Successfully");