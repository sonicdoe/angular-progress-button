angular.module('progressButton', [])
	.directive('progressButton', function() {
		return {
			restrict: 'E',
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


				var progressInitialize = function() {
					var button = element
					var progress = 0

					button.on('progress', function(e) {
						e = e.originalEvent || e

						if(!button.hasClass('in-progress')) {
							bar.css('display', '')
							progress = 0
							button.removeClass('finished').addClass('in-progress')
						}

						if(e.detail.absolute) {
							progress = e.detail.value
						} else {
							progress += e.detail.value
						}

						if(progress >= 1) {
							progress = 1
						}

						if(e.detail.finish) {
							button.removeClass('in-progress').addClass('finished')

							setTimeout(function() {
								fadeOut(bar, function() {
									emitEvent(button, 'progress-finish')
									setProgress(0)
								})

							}, 500)
						}

						setProgress(progress)
					})

					button.on('progress-finish', function() {
						setTimeout(function() {
							bar.css('display', 'block')
						}, 500)
					})

					function setProgress(percentage) {
						if(bar.hasClass('background-horizontal') || bar.hasClass('background-bar')) {
							bar.css('width', (percentage * 100) + '%')
						} else if(bar.hasClass('background-vertical')) {
							bar.css('height', (percentage * 100) + '%')
						}
					}
				}

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

				var emitEvent = function(el, eventName, data) {
					if(window.CustomEvent) {
						var event = new CustomEvent(eventName, { detail: data })
					} else {
						var event = document.createEvent('CustomEvent')
						event.initCustomEvent(eventName, true, true, { detail: data })
					}

					el[0].dispatchEvent(event)
				}

				progressInitialize()
			}
		}
	})
