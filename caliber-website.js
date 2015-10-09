

$(document).ready(function (){

// Toggle sliding website-menu (when dropdown mwnu button is clicked)
	$('.dropdown-menu-icon').click( function() {
		$('.sliding-website-navigation').animate({height: 'toggle'}, 250, function () {
    	});
	});

//Toggle sliding website-menu (when Nav-list item button is clicked)
	$('.nav-button').click( function() {
		$('.sliding-website-navigation').animate({height: 'toggle'}, 250, function () {
    	});
	});

// Toggle Fixed menu bar Caliber S&C name (depending on scroll)
	var logo = $('.fixed-menu-header-container')

	function logoSlider () {
		if (document.body.scrollTop > 325) //Show slider after scrolling 325px
			logo.stop().animate({'margin-top': '0px'}, 25);
		else
			logo.stop().animate({'margin-top': '-60px'}, 25);
	};

	$(window).scroll(function() {
		logoSlider();
	});










}); // End of document.ready event