var Model = require('./model');

var sendContact = function( params, callback ) {
	// console.log( "contactModel sendMessage function", params );

	$.ajax({
		url 		: "http://ec2-54-69-113-238.us-west-2.compute.amazonaws.com/php/contact.php",
		type 		: "POST",
		dataType 	: "json",
		data 		: params,
		success 	: function( response ) {
			callback(response);
		}
	});
};

module.exports = Model.extend({
	sendContact : sendContact
});