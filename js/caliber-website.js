

$(document).ready(function (){

// Toggle Fixed menu bar Caliber S&C name (depending on scroll)
	var logo = $('.slidedown-logo-text')

	function logoSlider () {
		if (document.body.scrollTop > 325) //Show slider after scrolling 325px
			logo.stop().animate({'margin-top': '60px'}, 25);
		else
			logo.stop().animate({'margin-top': '0px'}, 25);
	};

	$(window).scroll(function() {
		logoSlider();
	});










}); // End of document.ready event