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

// Contact form validation and feedback
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const msg = document.getElementById('formMsg');
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();

  if (!name || !/\S+@\S+\.\S+/.test(email) || !/^[0-9]{10,}$/.test(phone)) {
    msg.innerText = "Please fill all required fields correctly.";
    msg.style.color = "#ea2a2a";
    return;
  }
  msg.innerText = "Thank you! We will contact you soon.";
  msg.style.color = "#49af14";
  this.reset();
  setTimeout(() => { msg.innerText = ''; }, 3500);
});
