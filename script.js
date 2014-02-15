angular.module('progressButtonDemo', ['progressButton'])
	.controller('ProgressButtonsCtrl', function($scope) {
		$scope.generate = function(button) {
			button.progressTimed(3, function() {
				$scope.generate = function() {
					alert('Showing how a callback works!');
				}
			})
		}
	})
	.controller('ProgressControlCtrl', function($scope) {
		$scope.controlButton = {}

		$scope.increment = function(value) {
			$scope.controlButton.progressIncrement(value)
		}

		$scope.setTo = function(value) {
			$scope.controlButton.progressSet(value)
		}

		$scope.finish = function() {
			$scope.controlButton.progressFinish()
		}
	})
