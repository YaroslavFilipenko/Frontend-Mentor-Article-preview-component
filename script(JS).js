'use strict';

let shareButton = document.querySelector('.share-button');
let sharePopup = document.querySelector('.share-popup');
let sharePopupLinks = document.querySelectorAll('.share-popup__link');

shareButton.addEventListener('click', function() {
  shareButton.classList.toggle('share-button-active');
  sharePopup.classList.toggle('share-popup-active');
});

sharePopupLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    shareButton.classList.remove('share-button-active');
    sharePopup.classList.remove('share-popup-active');
  });
});

document.addEventListener('mouseup', function(e) {
  if (!shareButton.contains(e.target)) {
    shareButton.classList.remove('share-button-active');
    sharePopup.classList.remove('share-popup-active');
  }
});