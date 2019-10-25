/* eslint-disable no-undef */
$(document).ready(() => {
  $('.image').click(function () {
    const img = $(this);
    const src = img.attr('src');
    $('body').append(`${"<div class='increaseScreen'>"
    + "<div class='backGround'></div>"
    + "<img src='"}${src}' class='increased_img' /></div>`);
    $('.increaseScreen').fadeIn(200);
    $('.backGround').click(() => {
      $('.increaseScreen').fadeOut(200);
      setTimeout(() => {
        $('.increaseScreen').remove();
      }, 200);
    });
  });
});
