
document.addEventListener('DOMContentLoaded', function() {
  const modalEl = document.getElementById('imageModal');
  const modal = new bootstrap.Modal(modalEl);
  const modalImage = document.getElementById('modalImage');
  const caption = document.querySelector('.caption');
  
  // Click image to open modal
  document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', function() {
      modalImage.src = this.src;
      caption.textContent = this.alt;
      modal.show();
    });
  });
  
  // Properly handle all close methods
  function cleanClose() {
    // Manually remove backdrop if needed
    const backdrops = document.querySelectorAll('.modal-backdrop');
    backdrops.forEach(backdrop => backdrop.remove());
    // Reset body style
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
    // Hide modal
    modal.hide();
  }
  
  // Close when clicking X button
  document.querySelector('.btn-close').addEventListener('click', cleanClose);
  
  // Close when clicking outside
  modalEl.addEventListener('click', function(e) {
    if (e.target === this) cleanClose();
  });
  
  // Close with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') cleanClose();
  });
  
  // Swipe down to close on mobile
  let startY;
  modalEl.addEventListener('touchstart', e => { 
    startY = e.touches[0].clientY; 
  });
  
  modalEl.addEventListener('touchmove', e => {
    if (e.touches[0].clientY - startY > 100) cleanClose();
  });
});
