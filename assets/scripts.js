var config = {
	reset:  false,
	mobile: true,
	delay: 'always',
	opacity: 0,
	vFactor: 0.2,
}
window.sr = new scrollReveal( config );

jQuery(document).ready(function($) {
	if ( window.location.hash ) {
		$('html,body').animate({scrollTop:$(this.hash).offset().top-$('.site-navigation').innerHeight() }, 500);
	}

	$('.site-navigation a,.footer__navigation a').on('click', function(e){     
		e.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top-$('.site-navigation').innerHeight() }, 500);
	});

	$('.hero-image-outer').owlCarousel({
		baseClass: 'hero-image-outer',
		navContainerClass: '',
		navClass: ['', ''],
		controlsClass: '',
		dotsClass: '',
		navText: [' ', ' '],
		dots: false,
		nav: false,
		items: 1,
		autoplay: true,
		//center: true,
		margin: 0,
		//autowidth: true,
		loop: true,
		fade: true,
		//paginationSpeed: 1000,
		//autoPlay: 1000,
		//goToFirstSpeed: 1000,
		autoplayTimeout: 3500, // auto play delay time - start przewijania po tym czasie
		autoplaySpeed: 1500, // szybkość przewijania slidu - nie dziala jak jest animate
		animateOut: 'fadeOut',
		mouseDrag: false,
	});

});
