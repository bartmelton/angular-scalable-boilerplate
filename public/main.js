'use strict';

require.config({
	baseUrl:'js',
	paths: {
		// define all of your angular and utility files here
		angular: '../libs/angular/angular',
		angularUiRouter: '../libs/angular-ui-router/release/angular-ui-router.min',
		angularUiRouterHelper: '../libs/angular-ui-router.stateHelper/statehelper.min',
		angularAnimate: '../libs/angular-animate/angular-animate',
		angularBootstrap: '../libs/angular-bootstrap/ui-bootstrap-tpls',
		jquery: '../libs/jquery/dist/jquery.min',
		lodash: '../libs/lodash/dist/lodash.min',
		// this is your base file for setting up your angular module
		app: 'app',
		// define the top level path for your subsections here
		// this allows you to use "section1/path/file" in your section includes
		// instead of having to do "../section1/path/file" which would require changes if you move the directory
		section1:'../section1',
		section2:'../section2'

	},
	shim: {
		'angular' : {'exports' : 'angular'},
		'angularUiRouter': ['angular'],
		'angularUiRouterHelper': ['angular'],
		"angularAnimate": ["angular"],
		"angularBootstrap": ["angular"],
		'app': {
			"deps":['angular'],
			"exports":'app'
		}
	},
	priority: [
		"angular"
	]
});

require([
	'jquery',
	'angular',
	'lodash',
	'app',
	'inc'
], function($,angular,_,app){
		angular.element(document).ready(function() {
			  // initiate app on load.
				// change "myAppName" to whatever you want to call your app
				// "myAppName" also has to be changed in js/app.js
				angular.bootstrap(document, ["myAppName"]);
		});
});
