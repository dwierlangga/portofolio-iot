// Efek muncul perlahan saat scroll (Fade-in effect)
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll(".work-item").forEach((item) => {
  item.classList.add("fade-in");
  observer.observe(item);
});

// Tambahkan CSS dinamis untuk animasi
const style = document.createElement("style");
style.textContent = `
    .fade-in { opacity: 0; transform: translateY(20px); transition: all 0.6s ease-out; }
    .show { opacity: 1; transform: translateY(0); }
`;
document.head.appendChild(style);
