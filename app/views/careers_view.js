var View     		= require('./view'),
	template 		= require('./templates/careers'),
	contactHelper 	= require('./sendContact_helper');

var events 			= {
						'click .contact-submit'		: contactHelper.submitContact
			    	};

var afterRender = function() {
	console.log("RENDERED CAREERS VIEW");
};

var submitContact = function() {
	contactHelper.submitContact();
};

module.exports = View.extend({
    className 		: 'careers-view',
    template 		: template,
    events 			: events,
    afterRender 	: afterRender
});
