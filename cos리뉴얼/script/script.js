$(document).ready(function(){
 
    var swiper = new Swiper(".firstSwiper", {
        slidesPerView: 3,
        spaceBetween: 60,
        // slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      var swiper = new Swiper(".secondSwiper", {
        slidesPerView: 3,
        spaceBetween: 60,
        // slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      var swiper = new Swiper(".thirdSwiper", {
        slidesPerView: 3,
        spaceBetween: 60,
        loop:true,
        loopFillGroupWithBlank: false,
        pagination: {
          el: "swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

  $('.main-menu li').mouseenter(function(){
    let result = $(this).attr('data-alt');
    $('.sub-menu').removeClass('active');

    $(`#${result}`).addClass('active');

    $('.sub-menu-box').addClass('active');
  });
    

  $('.sub-menu-box').mouseleave(function(){
    $(this).removeClass('active');
  });
});