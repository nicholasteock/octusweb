var application = require('application')

module.exports = Backbone.Router.extend({
    routes: {
        '' 			: 'home',
        'about' 	: 'about',
        'features'	: 'features',
        // 'contact'	: 'contact',
        'careers' 	: 'careers'
    },
    
    home: function() {
        $('body').html(application.homeView.render().el)
    },

    about: function() {
        $('body').html(application.aboutView.render().el)
    },

    features: function() {
    	$("body").html(application.featuresView.render().el)
    },

    // contact: function() {
    // 	$("body").html(application.contactView.render().el)
    // },

    careers: function() {
    	$("body").html(application.careersView.render().el)
    },

})
