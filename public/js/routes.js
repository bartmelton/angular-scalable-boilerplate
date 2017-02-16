define(['app','angular','jquery'], function(app, angular, $) {

	app.config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider){
		$urlRouterProvider.otherwise('/');
		$stateProvider.state('home',{
			url:'/',
			views:{
				"nav@":{ // the @ is not required at the top level but including it for consistency
					templateUrl:'views/nav.html'
				},
				"body@":{ // the @ is not required at the top level but including it for consistency
					templateUrl:'views/main.html',
					controller:'homeController'
				}
			}
		});
	}]);

});
