/**
 * for require js depends defination
 */
requirejs.config({
	baseUrl: "javascripts",
	paths: {
		jquery: "//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min",
		angular: "//ajax.googleapis.com/ajax/libs/angularjs/1.2.2/angular.min",
		backbone: "//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.0/backbone-min",
		underscore: "//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min",
		bootstrap: "bootstrap.min",
		jqueryui: "//cdnjs.cloudflare.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min",
		main: "main"
	},
	shim: {
		jquery: {
			exports: '$'
		},
		angular: {
			exports: 'angular'
		},
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		bootstrap: {
			deps: ['jquery']
		},
		jqueryui: {
			deps: ['jquery']
		},
		main: {
			deps: ['angular']
		}
	},
	waitSeconds: 15
});

require(['main'], function() {
	console.log("import main.js");
});