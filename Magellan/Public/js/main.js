
angular.module('magApp', [])

angular.module('magApp').controller('mainController', ['$scope', '$http', function($scope, $http) {
console.log('hello')

$http.get('/getcountries')
				.then(function(returnData){
					$scope.countryData = returnData.data
				})
console.log($scope.countryData)
}]);
