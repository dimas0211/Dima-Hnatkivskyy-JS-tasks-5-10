const gallery = [...document.querySelectorAll('.gallery-section__box')];
const modalWindow = document.querySelector('.modal-window');
const modalImage = document.querySelector('.modal-image');

gallery.forEach((el) => {
  el.addEventListener('click', function() {
    modalWindow.style.display = 'flex';
    modalImage.src = this.children[0].src;
    document.body.style.overflow = 'hidden';
  });
});

modalWindow.addEventListener('click', function() {
  modalWindow.style.display = 'none';
  document.body.style.overflow = 'scroll';
});
