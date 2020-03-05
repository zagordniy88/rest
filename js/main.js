$(function () {

  $('.pictures__box').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
    adaptiveHeight: true,
    autoplay: true,
    variableWidth: true

  });


$('.header__menu-btn').on('click', function(){
  $('.menu__list').slideToggle();
});

});