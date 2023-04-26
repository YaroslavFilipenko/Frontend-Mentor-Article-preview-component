'use strict';

$('.share-button').click(function() {
    $('.share-button').toggleClass('share-button-active');
    $('.share-popup').toggleClass('share-popup-active');
})

$('.share-popup__link').click(function() {
    $('.share-button').removeClass('share-button-active');
    $('.share-popup').removeClass('share-popup-active');
})

$(document).mouseup(function (e) {
    let container = $('.share-button');
    if (container.has(e.target).length === 0) {
        $('.share-button').removeClass('share-button-active');
        $('.share-popup').removeClass('share-popup-active');
    }
});