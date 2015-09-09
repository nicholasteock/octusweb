var View     		= require('./view'),
	template 		= require('./templates/features'),
	contactHelper 	= require('./sendContact_helper');

var events 			= {
						'click .contact-submit'		: contactHelper.submitContact
			    	};

var afterRender = function() {
	console.log("RENDERED FEATURES VIEW");
};

module.exports = View.extend({
    className 		: 'features-view',
    template 		: template,
    events 			: events,
    afterRender 	: afterRender
});
