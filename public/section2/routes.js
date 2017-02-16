define(['app','angular','jquery','require'], function(app, angular, $, req) {
	'use strict';

	// use require to calculate the path for templates so we don't need to use absolute paths
	var views=req.toUrl('./views/');

	app.config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider){
		$stateProvider.state('section2',{
			parent:'home',
			url:'section2',
			views: {
				'body@':{ // since this is a child of "home" the @ is required
					templateUrl:views+'section2_main.html',
					controller:'section2MainController'
				}
			}
		}).state('section2.sub',{
			url:'section2/sub',
			views: {
				'innerContent@section2':{ // target a ui-view defined in section2_main.html
					templateUrl:views+'section2_subsection.html',
					controller:'section2SubsectionController'
				}
			}
		});
	}]);

});
