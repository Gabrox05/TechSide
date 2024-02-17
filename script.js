$('.center_slider').slick({
  centerMode: true,
  centerPadding: '60px',
  prevArrow: '<img src="images/arrowSX.png">',
  nextArrow: '<img src="images/arrowDX.png">',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

let burger = document.querySelector('.logo')
let nav = document.querySelector('.main-nav')
burger.addEventListener('click', function()
{
	burger.classList.toggle('active')
	nav.classList.toggle('active')
});
