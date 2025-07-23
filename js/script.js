javascript
function toExchangeImage(element) {
  document.getElementById('img_main').src = element.src;
}

function viewImage(src) {
  window.open(src, '_blank');
}
