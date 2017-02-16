define(['app','angular','jquery'], function(app, angular, $) {
	'use strict';
	app.controller('section2MainController',['$scope',function($scope){
		$scope.sectionText="Wow, section 2!";
		$scope.navText="Some text";
		$scope.addVal=1;
		$scope.addMe=function(){
			$scope.addVal++;
		};
	}]); //end controller
});
