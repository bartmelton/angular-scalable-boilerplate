define(['app','angular','jquery','require'], function(app, angular, $, req) {
	'use strict';
	// use require to calculate the path for templates so we don't need to use absolute paths
	var views=req.toUrl('./views/');

	app.config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider){
		$stateProvider.state('section1',{
			parent:'home',
			url:'section1',
			views: {
				'body@':{ // since this is a child of "home" the @ is required
					templateUrl:views+'section1_main.html',
					controller:'section1MainController'
				}
			}
		});
	}]);

});
