define(['jquery','angular','angularUiRouter','angularAnimate','angularBootstrap', 'angularUiRouterHelper'], function($,angular) {
	'use strict';
	// Declare app level module and components
		var app=angular.module('myAppName', ['ui.router', 'ui.router.stateHelper','ngAnimate','ui.bootstrap']);

		// set up any app config options that you need here
		// example
		/*app.config(function($animateProvider) {
			  $animateProvider.classNameFilter(/animate-/);
			});*/

		return app;
});
