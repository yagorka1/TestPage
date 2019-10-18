/* eslint-disable no-undef */
$(document).ready(() => {
  $('.image').click(function () {
    const img = $(this);
    const src = img.attr('src');
    $('body').append(`${"<div class='popup'>"
    + "<div class='popup_bg'></div>"
    + "<img src='"}${src}' class='popup_img' /></div>`);
    $('.popup').fadeIn(200);
    $('.popup_bg').click(() => {
      $('.popup').fadeOut(200);
      setTimeout(() => {
        $('.popup').remove();
      }, 200);
    });
  });
});
