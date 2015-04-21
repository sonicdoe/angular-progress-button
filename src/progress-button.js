angular.module('progressButton', [])
	.directive('progressButton', function($timeout) {
		return {
			restrict: 'AE',
			transclude: true,
			replace: true,
			scope: {
				value: '&',
				type: '@',
				inProgressText: '@inProgress',
				completionText: '@complete'
			},
			template: '<a class="progress-button"><span class="progress-button-text" ng-transclude></span><span class="progress-button-bar progress-button-{{type}}"></span></a>',
			link: function(scope, element, attrs) {
				var bar = angular.element(element[0].querySelectorAll('.progress-button-bar'))
				var buttonText = angular.element(element[0].querySelectorAll('.progress-button-text'))

				scope.defaultText = buttonText.text()
				attrs.$observe('type', function(value) { scope.type = value || 'horizontal' })
				attrs.$observe('inProgress', function(value) { scope.inProgressText = value || 'Loading…' })
				attrs.$observe('complete', function(value) { scope.completionText = value || 'Complete.' })

				scope.$watch('value()', function(value) {
					if(!value) value = 0
					if(value > 1.0) value = 1.0

					if(value === 0.0) {
						buttonText.text(scope.defaultText)
						bar.css('display', 'none')
					} else if(value === 1.0) {
						buttonText.text(scope.completionText)
						bar.css('display', 'block')

						$timeout(function() {
							fadeOut(bar)
						}, 500)
					} else {
						buttonText.text(scope.inProgressText)
						bar.css('display', 'block')
					}

					// Allow ‘display: block’ above to be applied before setting the
					// bar’s width/height. This allows the CSS transition to happen if
					// the original value was zero.
					$timeout(function() {
						if(scope.type === 'vertical') {
							bar.css('height', (value * 100) + '%')
						} else {
							bar.css('width', (value * 100) + '%')
						}
					})
				})

				var fadeOut = function(el, callback) {
					el.css('opacity', 1)

					var last = +new Date()

					var tick = function() {
						el.css('opacity', +el.css('opacity') - (new Date() - last) / 400)
						last = +new Date()

						if(+el.css('opacity') > 0) {
							(window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
						} else {
							el.css('display', 'none')
							el.css('opacity', 1)

							if(typeof callback === 'function') {
								callback()
							}
						}
					}

					tick()
				}
			}
		}
	});
