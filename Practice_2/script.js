'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const showModelBtns = document.querySelectorAll('.show-modal');
const openModel = function () {
  overlay.classList.remove('hidden');
  modal.classList.remove('hidden');
};
for (let i = 1; i < showModelBtns.length; i++) {
  showModelBtns[i].addEventListener('click', openModel);
}
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
document.querySelector('.close-modal').addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
  if (e.key == 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
