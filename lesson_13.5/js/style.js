$(document).ready(function () {
 $('.popup-btn').on('click', function (event) {
  event.preventDefault();
  $('.popup').fadeIn();
 });
 $('.close').on('click', function (event) {
  event.preventDefault();
  $('.popup').fadeOut();
 })
});

$('.feautures-sidebar').slick({
 infinite: true,
 slidesToShow: 3,
 slidesToScroll: 3,
 autoplay: true,
 autoplaySpeed: 2000,
 responsive: [{
  breakpoint: 991,
  settings: {
   slidesToShow: 2,
   slidesToScroll: 2,
   prevArrow: '<button class="prev arrow"></button>',
   nextArrow: '<button class="next arrow"></button>',
   dots: true
  }
 },
 {
  breakpoint: 767,
  settings: {
   slidesToShow: 1,
   slidesToScroll: 1,
   dots: true,
   prevArrow: '<button class="prev arrow"></button>',
   nextArrow: '<button class="next arrow"></button>'
  }
 }
 ]
});

$('.second-sidebar').slick({
 infinite: true,
 slidesToShow: 2,
 slidesToScroll: 2,
 responsive: [{
  breakpoint: 10000,
  settings: {
   slidesToShow: 1,
   slidesToScroll: 1,
   prevArrow: '<button class="prev arrow"></button>',
   nextArrow: '<button class="next arrow"></button>'
  }
 }
 ]
});

$('.slider-for').slick({
 arrows: false,
 fade: true,
 draggable: false,
 asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
 slidesToShow: 3,
 slidesToScroll: 3,
 asNavFor: '.slider-for',
 centerMode: true,
 draggable: false,
 focusOnSelect: true
});
