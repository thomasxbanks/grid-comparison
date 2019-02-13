console.log('masonry.js loaded')

const windowWidth = window.clientWidth
const elem = document.querySelector('.grid-masonry');
const msnry = new Masonry( elem, {
  // options
  itemSelector: '.grid-item',
  columnWidth: (windowWidth / 4),
  transitionDuration: '0.3s'
});