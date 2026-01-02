// Slider Avant / Après
document.querySelectorAll('.slider').forEach(slider => {
  let index = 0;
  const images = slider.querySelectorAll('img');

  setInterval(() => {
    images[index].classList.remove('active');
    index = (index + 1) % images.length;
    images[index].classList.add('active');
  }, 3000);
});
