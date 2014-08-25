var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');
	
	$stateProvider
		// HOME STATES AND NESTED VIEWS
		.state('home', {
			url: '/home',
			templateUrl: 'partial-home.html'
		})
	
		// nested list with custom controller
		.state('home.list', {
			url: '/list',
			templateUrl: 'partial-home-list.html',
			controller: function($scope) {
				$scope.dogs = ['Bernese', 'Husky', 'Labradoodle'];
			}
		})
	
		// nested list with just some random string data
		.state('home.paragraph', {
			url: '/paragraph',
			template: 'It\'s my birthday'
		})
	
		// ABOUT PAGE AND MULTIPLE NAMED VIEWS
		.state('about', {
			url: '/about',
			views: {
				// the main template will be placed here
				'': { templateUrl: 'partial-about.html' },
				
				// the child views will be defined here (absolutely named)
				'columnOne@about': { template: 'Look I am a column!' },
				'columnTwo@about': {
					templateUrl: 'table-data.html',
					controller: 'scotchController'
				}
			}
		});
});

routerApp.controller('scotchController', function($scope) {
	$scope.message = 'test';
	
	$scope.guitars = [
		{
			name: 'Fender',
			price: 600
		},
		{
			name: 'Gibson',
			price: 500
		},
		{
			name: 'Paul Reed Smith',
			price: 700
		}
	];
});