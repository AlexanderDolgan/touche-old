$(document).ready(function(){
	
	$('.ham-btn').on('click', function() {
		$('.nav-wrapper').css('left', '0');
	});


	$('.close-btn').on('click', function() {
		$('.nav-wrapper').css('left', '-100%');
	});


	$('.centerer').on('click', function() {
		$('.about').slideUp();
	});

	$('.close-about').on('click', function() {
		$('.about').slideUp();
	});

	$('.about-btn').on('click', function() {
		$('.about').slideDown();
		$('.nav-wrapper').css('left', '-100%');
	});

});