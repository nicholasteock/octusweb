var View     		= require('./view'),
	template 		= require('./templates/home'),
	contactHelper 	= require('./sendContact_helper');

var events 			= {
			    		'click .nav-accessibility' 	: 'toggleAccessibility',
			    		'click .nav-integration' 	: 'toggleIntegration',
			    		'click .nav-productivity' 	: 'toggleProductivity',
			    		'click .nav-security' 		: 'toggleSecurity',
			    		'click .contact-submit'		: contactHelper.submitContact
			    	};

var afterRender = function() {
	$("body").removeClass("body2");

	setTimeout( showPitch, 100 );
	setInterval( rotateFeature, 7000 );
};

var rotateFeature = function() {

	if( $("body").width() < 768 ) {
		return;
	}

	var currentFeature = $(".feature-nav-icon:not(.desaturate)");

	if( currentFeature.hasClass( 'nav-accessibility' ) ) {
		toggleIntegration();
		return;
	}

	if( currentFeature.hasClass( 'nav-integration' ) ) {
		toggleProductivity();
		return;
	}

	if( currentFeature.hasClass( 'nav-productivity' ) ) {
		toggleSecurity();
		return;
	}

	if( currentFeature.hasClass( 'nav-security' ) ) {
		toggleAccessibility();
		return;
	}
};

function showPitch() {
	// console.log( "Showing pitch" );

	// Show questions
	$(".question-1").delay(1000).fadeIn(1000);
	$(".question-2").delay(1500).fadeIn(1000);
	$(".question-3").delay(3500).fadeIn(1000);
	setTimeout( function() { $(".pitch-question").fadeOut(); }, 5000 );

	// Show features
	$(".features-1").delay( 6000 ).fadeIn(1000);
	$(".features-2").delay( 6500 ).fadeIn(1000);
	$(".features-3").delay( 7000 ).fadeIn(1000);
	$(".features-4").delay( 7500 ).fadeIn(1000);
	setTimeout( function() { $(".pitch-features").fadeOut(); }, 9500 );

	// Show logo
	$(".pitch-logo").delay( 10000 ).fadeIn(1600);
};

var toggleAccessibility = function() {
	// console.log('Toggling accessibility');
	$(".feature").addClass("visible-xs");
	$(".feature-accessibility").removeClass("visible-xs");

	$(".feature-nav-icon").addClass("desaturate");
	$(".nav-accessibility").removeClass("desaturate");
};

var toggleIntegration = function() {
	// console.log('Toggling Integration');
	$(".feature").addClass("visible-xs");
	$(".feature-integration").removeClass("visible-xs");

	$(".feature-nav-icon").addClass("desaturate");
	$(".nav-integration").removeClass("desaturate");
};

var toggleProductivity = function() {
	// console.log('Toggling Productivity');
	$(".feature").addClass("visible-xs");
	$(".feature-productivity").removeClass("visible-xs");

	$(".feature-nav-icon").addClass("desaturate");
	$(".nav-productivity").removeClass("desaturate");
};

var toggleSecurity = function() {
	// console.log('Toggling Security');
	$(".feature").addClass("visible-xs");
	$(".feature-security").removeClass("visible-xs");

	$(".feature-nav-icon").addClass("desaturate");
	$(".nav-security").removeClass("desaturate");
};

module.exports = View.extend({
    id 					: 'home-view',
    template 			: template,
    events 				: events,
    toggleAccessibility	: toggleAccessibility,
    toggleIntegration 	: toggleIntegration,
    toggleProductivity 	: toggleProductivity,
    toggleSecurity 		: toggleSecurity,
    afterRender 		: afterRender
});
