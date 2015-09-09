var ContactModel 	= require('models/contact_model');

function submitContact() {
	var name 	= $(".contact-name").val(),
		email 	= $(".contact-email").val(),
		phone 	= $(".contact-phone").val(),
		company = $(".contact-company").val(),
		// request = $("input[type='radio'][name='contact-option']:checked").val(),
		params 	= {};

	var contactModel = new ContactModel();

	// console.log( "Values retrieved: " );
	// console.log( "Name: ", name );
	// console.log( "Email: ", email );
	// console.log( "Phone: ", phone );
	// console.log( "Company: ", company );
	// console.log( "Request: ", request );

	if( !validateContactForm( name, email, phone, company) ) {
		return;
	}
	else {
		$(".contact-submit").addClass("hide");
		$(".contact-submit-spinner").removeClass("hide");
		params = {
			name 	: name,
			email 	: email,
			phone 	: phone,
			company : company,
			request : request
		};

		contactModel.sendContact( params, submitContactCallback );
	}
};

function submitContactCallback( response ) {
	// console.log( "in submitContactCallback. response is : ", response );

	if( response.result === "success" ) {
		$(".contact-submit").removeClass("hide");
		$(".contact-submit-spinner").addClass("hide");
		$(".contact-modal").modal("hide");
		$(".contact-submit-success-modal").modal("show");
	}
	else {
		$(".contact-submit").removeClass("hide");
		$(".contact-submit-spinner").addClass("hide");
		console.error("Contact submission failed.");
	}
};

function validateContactForm( name, email, phone, company ) {
	var $nameError 		= $(".contact-name-error").empty(),
		$emailError 	= $(".contact-email-error").empty(),
		$phoneError 	= $(".contact-phone-error").empty(),
		$companyError 	= $(".contact-company-error").empty(),
		regex 			= /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/,
		valid 			= true;

	// Name validation
	if( name === "" ) {
		$nameError.html("*This field is required.");
		valid = false;
	}

	// Email validation
	if( !regex.test( email ) ) {
		$emailError.html("*Invalid email.");
		valid = false;
	}

	if( email === "" ) {
		$emailError.html("*This field is required.");
		valid = false;
	}

	// Phone validation
	if( phone.length != 8 || !$.isNumeric( phone ) ) {
		$phoneError.html("*Invalid phone number.");
		valid = false;
	}

	if( phone === "" ) {
		$phoneError.html("*This field is required.");
		valid = false;
	}

	// Company validation
	if( company === "" ) {
		$companyError.html("*This field is required.");
		valid = false;
	}

	return valid;
};

module.exports = {
	submitContact: submitContact
}