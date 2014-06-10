angular.module('progressButtonDemo', ['progressButton'])
	.controller('ProgressButtonsCtrl', function($scope, $interval) {
		$scope.buttons = [
			{ value: 0.0 },
			{ value: 0.0 },
			{ value: 0.0 }
		]

		$scope.simulateProgress = function(buttonIndex, seconds, callback) {
			if($scope.buttons[buttonIndex].simulating) return

			$scope.buttons[buttonIndex].simulating = true
			$scope.buttons[buttonIndex].value = 0.2

			var interval = $interval(function() {
				$scope.buttons[buttonIndex].value += 0.2

				if($scope.buttons[buttonIndex].value >= 1.0) {
					$interval.cancel(interval)

					if(typeof callback === 'function') callback()
				}
			}, (seconds / 5) * 1000)
		}

		$scope.generate = function(button) {
			button.progressTimed(3, function() {
				$scope.generate = function() {
					alert('Showing how a callback works!');
				}
			})
		}
	})
	.controller('ProgressControlCtrl', function($scope, $interval) {
		$scope.startSimulation = function() {
			// Only allow one simulation at a time
			if($scope.interval) return

			var tick = function() {
				if(!$scope.value) $scope.value = 0

				$scope.value = ((($scope.value * 100) + 10) / 100)

				if($scope.value >= 1.0) $scope.stopSimulation()
			}

			tick()
			$scope.interval = $interval(tick, 1000)
		}

		$scope.stopSimulation = function() {
			$interval.cancel($scope.interval)
			$scope.interval = undefined
		}
	})
