
const typingEl = document.getElementById('typingName');
const nameText = "Aniket Ghaturle";
let i = 0;

function typeTick() {
  if (i < nameText.length) {
    typingEl.textContent += nameText.charAt(i);
    i++;
    setTimeout(typeTick, 90 + Math.random() * 40);
  }
}
typeTick();

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

const avatar = document.getElementById("profilePhoto");

avatar.addEventListener("mousemove", (e) => {
  const rect = avatar.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;

  avatar.style.transform =
    `rotateX(${(-y / 12)}deg) rotateY(${(x / 12)}deg) scale(1.05)`;
});

avatar.addEventListener("mouseleave", () => {
  avatar.style.transform = "";
});

avatar.addEventListener("click", () => {
  window.open("futuristic_avatar.png", "_blank");
});

const openResumeBtn = document.getElementById("openResumeBtn");
const resumeModal = document.getElementById("resumeModal");
const closeModal = document.getElementById("closeModal");

openResumeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  resumeModal.classList.add("open");
});

closeModal.addEventListener("click", () => {
  resumeModal.classList.remove("open");
});

resumeModal.addEventListener("click", (e) => {
  if (e.target === resumeModal) {
    resumeModal.classList.remove("open");
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
        entry.target.style.transition = "all 600ms ease-out";
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".fade-in, .project-card, .edu-card, .skill-tags a, .contact-card")
  .forEach(el => {
    observer.observe(el);
  });
