// ── Lucide Icons Init ──────────────────────────────
lucide.createIcons();

// ── Intersection Observer – Fade-in on scroll ──────
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Hanya animasi sekali
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

// ── Hamburger Mobile Menu ──────────────────────────
const hamburger = document.getElementById("hamburger");
const navLinks  = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("open");
});

// Tutup menu saat link diklik
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navLinks.classList.remove("open");
  });
});

// ── Navbar scroll shadow ───────────────────────────
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.style.boxShadow = "0 4px 32px rgba(0,0,0,0.4)";
  } else {
    navbar.style.boxShadow = "none";
  }
});

// ── Typed text effect ──────────────────────────────
const phrases = ["IoT & Robotika.", "Embedded System.", "Firmware C++.", "Solusi Inovatif."];
let phraseIdx = 0;
let charIdx   = 0;
let isDeleting = false;
const typedEl  = document.getElementById("typed");

function type() {
  const current = phrases[phraseIdx];

  if (isDeleting) {
    charIdx--;
  } else {
    charIdx++;
  }

  typedEl.textContent = current.slice(0, charIdx);

  let delay = isDeleting ? 60 : 100;

  if (!isDeleting && charIdx === current.length) {
    delay = 1800; // Pause setelah selesai mengetik
    isDeleting = true;
  } else if (isDeleting && charIdx === 0) {
    isDeleting = false;
    phraseIdx  = (phraseIdx + 1) % phrases.length;
    delay = 400;
  }

  setTimeout(type, delay);
}

type();
