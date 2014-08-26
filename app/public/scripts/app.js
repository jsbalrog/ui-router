angular.module('routerApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider, $locationProvider) {

	$locationProvider.html5Mode(true);

	// catch all route
	$urlRouterProvider.otherwise('/');

	$stateProvider
		// DEFAULT STATES AND NESTED VIEWS
		.state('home', {
			url: '/',
			templateUrl: 'partial-home.html'
		})

		// nested list with custom controller
		.state('home.list', {
			url: 'list',
			templateUrl: 'partial-home-list.html',
			controller: function($scope) {
				$scope.dogs = ['Bernese', 'Husky', 'Labradoodle'];
			}
		})

		// nested list with just some random string data
		.state('home.paragraph', {
			url: 'paragraph',
			template: 'It\'s my birthday'
		})

		// CONTACT PAGE
		.state('contact', {
			url: '/contact',
			templateUrl: 'partial-contact.html',
			controller: 'ContactCtrl'
		})

		// ABOUT PAGE AND MULTIPLE NAMED VIEWS
		.state('about', {
			url: '/about',
			views: {
				// the main template will be placed here
				'': {
					templateUrl: 'partial-about.html'
				},

				// the child views will be defined here (absolutely named)
				'columnOne@about': {
					template: 'Look I am over here in a named subview!'
				},
				'columnTwo@about': {
					templateUrl: 'table-data.html',
					controller: 'AboutCtrl'
				}
			}
		});
});

angular.module('routerApp').controller('AboutCtrl', function($scope) {
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
