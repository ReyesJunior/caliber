

$(document).ready(function (){

  // ** Toggle Fixed menu bar Caliber S&C name (depending on scroll)
	// var logo = $('.slidedown-logo-text')

	// function logoSlider () {
	// 	if (document.body.scrollTop > 325) //Show slider after scrolling 325px
	// 		logo.stop().animate({'margin-top': '60px'}, 25);
	// 	else
	// 		logo.stop().animate({'margin-top': '0px'}, 25);
	// };

	// $(window).scroll(function() {
	// 	logoSlider();
	// });

  // ** Hide navbar-collapse menu ( when any navbar-item is clicked ) ** //

  $('.navbar-item').click( function() {
    var navbar = $('.navbar-toggle');
    var navbarCollapse = $( '.navbar-collapse' );

    navbar.attr("aria-expanded","false");
    navbarCollapse.removeClass('in');
  });

  // ** Smooth Scrolling ** //

  $(function() {
    // get all anchors (a) that contains '#' in href, but exclude anchors with href's that equal exactly '#'
    $('a[href*="#"]:not([href="#"])').click(function() {
      // if current location URL matches this window's URL and current location hostname matches this window's hostname is true, 
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        // store this.hash (reads the href attribute of 'this' and gets part of the url beginning with '#') into a variable called 'target'
        var target = $(this.hash);
        // if the 'target' exists, match 'target' with it's counterpart element (#id-selector),
        // else match 'target' with anchor (a) that has matching name ('[name= #matching name]')
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        // if the counterpart element exists (either id-selector or anchor-name)
        if (target.length) {
          // scroll to counterpart element id-selector/anchor-name
          $('html, body').animate({
            scrollTop: target.offset().top -50
          }, 1000);

          return false;

        }
      }
    });
  });


}); // End of document.ready event