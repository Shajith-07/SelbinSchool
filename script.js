// Animate elements on scroll and on page load with fade effects
function animateSectionsOnScroll() {
  document.querySelectorAll('.animate-on-scroll').forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      section.classList.add('visible');
    }
  });
}
window.addEventListener('DOMContentLoaded', animateSectionsOnScroll);
window.addEventListener('scroll', animateSectionsOnScroll);

// Image modal view for gallery images
document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', function() {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImg');
    modalImg.src = this.src;
    modal.style.display = 'flex';
  });
});

function closeModal() {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modalImg');
  modal.style.display = 'none';
  modalImg.src = '';
}
document.getElementById('modal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

