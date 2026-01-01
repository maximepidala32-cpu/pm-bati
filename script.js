// Animations simples
const sections = document.querySelectorAll('section');

sections.forEach(section => {
  section.style.opacity = 0;
});

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    if (section.getBoundingClientRect().top < window.innerHeight - 100) {
      section.style.opacity = 1;
      section.style.transition = "1s";
    }
  });
});
