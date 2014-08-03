(function() {
	'use strict';
	/* Controllers */

	angular.module('chronoCommit.controllers', [])
		.controller('dataMapsCtrl', ['$scope', 'timeDataService',
			function($scope, timeDataService) {

				$scope.day = 2
				$scope.hour = 17

				timeDataService.getDataFor($scope.day, $scope.hour)
					.then(function(data) { 
						$scope.countriesData = data 
					})

				$scope.colourGbr = function() {
					countryDataService.updateCountries();
				};
			}
		])
		.controller('sliderCtrl', ['$scope', 'countryDataService',
			function($scope, countryDataService) {
				$scope.timeAxisPosition = 7;

				$scope.$watch('timeAxisPosition', function(newValue, oldValue) {
					if (newValue)
						console.log('clipclop' + newValue);
				}, true);
			}
		]);
})();
