angular.module('routerApp').controller('ContactCtrl', function($scope, $http) {
	$http.get('api/foo').success(function(results) {
		$scope.results = results;
	});
});
