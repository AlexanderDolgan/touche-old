$(document).ready(function(){
	
	$('.ham-btn').on('click', function(evt) {
		$('.nav-wrapper').css('left', '0');
	});


	$('.close-btn').on('click', function(evt) {
		$('.nav-wrapper').css('left', '-100%');
	});

});