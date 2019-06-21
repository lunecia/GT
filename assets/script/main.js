'use strict';

// slick-slider
$('.vdo-item').slick({
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	adaptiveHeight: true,
	nextArrow: '.next',
	prevArrow: '.prev'
});

// scrollto
$('.up-to-top').on('click', function (e) {
	e.preventDefault();
	$.scrollTo(this.hash, 400, { offset: -60 });
});

$('.hide-button').on('click', function (e) {
	e.preventDefault();
	$('.fixed-nav-list').addClass('hide');
	$('.open-nav').addClass('show');
});
$('.open-nav').on('click', function (e) {
	e.preventDefault();
	$('.fixed-nav-list').removeClass('hide');
	$('.open-nav').removeClass('show');
});

// slick-slider-gallery
$('.gallery-slide-inner').slick({
	infinite: false,
	slidesToShow: 3,
	slidesToScroll: 3,
	dots: true,
	responsive: [{
		breakpoint: 1024,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
			infinite: true,
			dots: true
		}
	}, {
		breakpoint: 780,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 2
		}
	}, {
		breakpoint: 480,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false
		}
	}]
});

// slick-arrow
$('.vdo-item').on('afterChange', function (event, slick, currentSlide, nextSlide) {

	var leftPic = $('.slick-current').prev().attr('data-pic');
	var leftName = $('.slick-current').prev().attr('data-shot');
	var leftStudio = $('.slick-current').prev().attr('data-name');

	var rightPic = $('.slick-current').next().attr('data-pic');
	var rightName = $('.slick-current').next().attr('data-shot');
	var rightStudio = $('.slick-current').next().attr('data-name');

	$('.prev-pic').attr('src', leftPic);
	$('.detail-prev').find('h4').text(leftName);
	$('.detail-prev').find('p').text(leftStudio);

	$('.next-pic').attr('src', rightPic);
	$('.detail-next').find('h4').text(rightName);
	$('.detail-next').find('p').text(rightStudio);
});

// scrollToFixed
$('header').scrollToFixed();

// remove fancyapp
var width = $(window).width();
var height = $(window).height();
if (width <= 420) {
	$('.slick-slide').removeClass('fancybox');
} else if (width > 420) {
	$('.slick-slide').addClass('fancybox');
}