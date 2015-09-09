var View     		= require('./view'),
	template 		= require('./templates/about'),
	contactHelper 	= require('./sendContact_helper');

var events 			= {
						'click .contact-submit'		: contactHelper.submitContact
			    	};

var afterRender = function() {
	console.log("RENDERED ABOUT VIEW");
};

module.exports = View.extend({
    className 		: 'about-view',
    template 		: template,
    events 			: events,
    afterRender 	: afterRender
});
