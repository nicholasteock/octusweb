// Put handlebars.js helpers here

// Stuffing header modals and nav here for now.
// Can't figure out rendering multiple templates in the same view.
Handlebars.registerHelper( 'globalHeader', function(options) {
	var output = "<!-- Begin contact modal -->\
					<div class=\"modal contact-modal\">\
						<div class=\"modal-dialog\">\
							<div class=\"modal-content\">\
								<div class=\"modal-header\">\
									<button type=\"button\" class=\"close\" data-dismiss=\"modal\">\
										<span aria-hidden=\"true\">&times;</span>\
										<span class=\"sr-only\">Close</span>\
									</button>\
									<h3 class=\"modal-title text-center bold white\">Contact Us</h3>\
								</div>\
								<div class=\"modal-body\">\
									<form class=\"contact-form\" role=\"form\">\
										<div class=\"form-group\">\
											<label for=\"contact-name\">Name</label>\
											<input type=\"text\" class=\"form-control contact-name\">\
											<span class=\"pull-right contact-error contact-name-error\"></span>\
										</div>\
										<div class=\"form-group\">\
											<label for=\"contact-email\">Email</label>\
											<input type=\"email\" class=\"form-control contact-email\">\
											<span class=\"pull-right contact-error contact-email-error\"></span>\
										</div>\
										<div class=\"form-group\">\
											<label for=\"contact-phone\">Phone</label>\
											<input type=\"text\" class=\"form-control contact-phone\">\
											<span class=\"pull-right contact-error contact-phone-error\"></span>\
										</div>\
										<div class=\"form-group\">\
											<label for=\"contact-company\">Company / Organization</label>\
											<input type=\"text\" class=\"form-control contact-company\">\
											<span class=\"pull-right contact-error contact-company-error\"></span>\
										</div>\
										<div class=\"form-group\">\
											<label for=\"contact-message\">Message</label>\
											<textarea rows=\"3\" class=\"form-control contact-message\"></textarea>\
											<span class=\"pull-right contact-error contact-message-error\"></span>\
										</div>\
									</form>\
								</div>\
								<div class=\"modal-footer\">\
									<button type=\"button\" class=\"center-block btn btn-danger btn-lg contact-submit\">Submit</button>\
									<img class=\"center-block spinner contact-submit-spinner hide\" src=\"img/spinner.gif\">\
								</div>\
							</div>\
						</div>\
					</div>\
					<!-- End contact modal -->\
					<!-- Begin contact submission success modal -->\
					<div class=\"modal contact-submit-success-modal\">\
						<div class=\"modal-dialog\">\
							<div class=\"modal-content\">\
								<div class=\"modal-header\">\
									<button type=\"button\" class=\"close\" data-dismiss=\"modal\">\
										<span aria-hidden=\"true\">&times;</span>\
										<span class=\"sr-only\">Close</span>\
									</button>\
									<h3 class=\"modal-title text-center bold white\">Response Submitted</h3>\
								</div>\
								<div class=\"modal-body\">\
									<h3 class=\"text-center\">Thank You!</h3>\
									<h3 class=\"text-center\">We greatly appreciate your interest.</h3>\
									<h3 class=\"text-center\">Our team will contact you very soon.</h3>\
								</div>\
								<div class=\"modal-footer\">\
									<button type=\"button\" class=\"center-block btn btn-danger btn-lg\" data-dismiss=\"modal\">Close</button>\
								</div>\
							</div>\
						</div>\
					</div>\
					<!-- End contact submission success modal -->\
					<!-- BEGIN TOP NAVIGATION BAR -->\
					<nav class=\"navbar navbar-default frontpage-navbar\" role=\"navigation\">\
						<div class=\"container\">\
							<!-- Brand and toggle get grouped for better mobile display -->\
							<div class=\"navbar-header\">\
								<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\
									<span class=\"sr-only\">Toggle navigation</span>\
									<span class=\"icon-bar\"></span>\
									<span class=\"icon-bar\"></span>\
									<span class=\"icon-bar\"></span>\
								</button>\
								<a class=\"navbar-brand\" href=\"#\">\
									<img src=\"img/logo_inverse.png\">\
								</a>\
							</div>\
							<!-- Collect the nav links, forms, and other content for toggling -->\
							<div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\
								<ul class=\"nav navbar-nav navbar-right\">\
									<li><a href=\"#/about\">About</a></li>\
									<li><a href=\"#/features\">Features</a></li>\
									<li><a href=\"#/careers\">Careers</a></li>\
									<li>\
										<a>\
											<button class=\"btn btn-danger btn-lg btn-trial\" data-toggle=\"modal\" data-target=\".contact-modal\">\
												Free Trial\
											</button>\
										</a>\
									</li>\
								</ul>\
							</div>\
						</div>\
					</nav>\
					<!-- END TOP NAVIGATION BAR -->";

	return output;
});