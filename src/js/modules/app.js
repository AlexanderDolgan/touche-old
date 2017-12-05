$(document).ready(function(){
	
	$('.ham-btn').on('click', function() {
		$('.nav-wrapper').css('left', '0');
		$('.main-nav').addClass('active');
	});

	$('.close-btn').on('click', function() {
		$('.nav-wrapper').css('left', '-100%');
		$('.main-nav').removeClass('active');
	});

	$('.centerer').on('click', function() {
		$('.about').slideUp();
	});

	$('.close-about').on('click', function() {
		$('.about').slideUp();
	});

	$('.about-btn').on('click', function() {
		$('.about').fadeIn();
		$('.nav-wrapper').css('left', '-100%');
	});

	$('.image-gallery').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.image-gallery-nav',
		responsive: [
			{
				breakpoint: 480,
				settings: "unslick"
			}
		]
	});
	$('.image-gallery-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.image-gallery',
		centerMode: true,
		focusOnSelect: true
	});

	

});