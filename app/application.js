// Application bootstrapper.
Application = {
    initialize: function() {

        // var ContactModel    = require('models/contact_model');

        var HomeView 		= require('views/home_view'),
            AboutView       = require('views/about_view'),
        	FeaturesView 	= require('views/features_view'),
        	CareersView 	= require('views/careers_view'),
        	Router   		= require('lib/router');
        
        // this.contactModel   = new ContactModel();
        this.homeView 		= new HomeView();
        this.aboutView      = new AboutView();
        this.featuresView 	= new FeaturesView();
        this.careersView 	= new CareersView();
        this.router   		= new Router();

        if (typeof Object.freeze === 'function') Object.freeze(this)

    }
}

module.exports = Application
