$(document).ready(function(){
	
	$('.ham-btn').on('click', function() {
		$('.nav-wrapper').css('left', '0');
	});


	$('.close-btn').on('click', function() {
		$('.nav-wrapper').css('left', '-100%');
	});


	$('.centerer').on('click', function() {
		$('.about').fadeOut();
	});

	$('.close-about').on('click', function() {
		$('.about').fadeOut();
	});

	$('.about-btn').on('click', function() {
		$('.about').fadeIn();
		$('.nav-wrapper').css('left', '-100%');
	});

});