define(['app','angular','jquery'], function(app, angular, $) {
	'use strict';
	app.controller('homeController',['$scope',function($scope){
		$scope.hello="Hello World!!";

	}]); //end controller
});
