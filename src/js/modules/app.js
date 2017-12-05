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

});