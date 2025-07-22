// Animated element reveal on scroll and load
function inViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top < (window.innerHeight - 40)
  );
}

function revealFade() {
  document.querySelectorAll('.fade-in, .fade-up, .fade-down').forEach(el => {
    if (inViewport(el)) el.classList.add('revealed');
  });
}
window.addEventListener('scroll', revealFade);
window.addEventListener('DOMContentLoaded', revealFade);

// Image modal view (gallery)
document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', function() {
    document.getElementById('modalImg').src = this.src;
    document.getElementById('modal').style.display = 'flex';
  });
});

function closeModal() {
  document.getElementById('modal').style.display = 'none';
  document.getElementById('modalImg').src = '';
}
document.getElementById('modal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

// Form validation and feedback
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  let msg = document.getElementById('formMsg');
  msg.style.color = '#49af14';
  let name = document.getElementById('name').value.trim();
  let email = document.getElementById('email').value.trim();
  let phone = document.getElementById('phone').value.trim();
  if (!name || !/\S+@\S+\.\S+/.test(email) || !/^[0-9]{10,}$/.test(phone)) {
    msg.innerText = "Please fill all required fields correctly.";
    msg.style.color = "#ea2a2a";
    return;
  }
  msg.innerText = "Thank you! We will contact you soon.";
  this.reset();
  setTimeout(() => { msg.innerText = '' }, 3500);
});
