import './style.css';

// Subtle mouse track for the radial glow
const glow = document.querySelector('.radial-glow');

if (glow) {
  window.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth) * 100;
    const y = (clientY / window.innerHeight) * 100;
    
    // Smoothly shift the glow towards the mouse
    glow.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(255, 255, 255, 0.04) 0%, transparent 60%)`;
  });
}

// Mobile specific tweaks
if (window.innerWidth < 640) {
  // Mobile adjustments
}
