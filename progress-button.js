angular.module('progressButton', [])
	.directive('progressButton', function() {
		return {
			scope: true,
			link: function(scope, element, attrs) {
				scope.$parent[attrs.progressButton] = scope

				scope.progressStart = function() {
					var button = element
					
					lastProgress = new Date().getTime()

					if(element.hasClass('in-progress')) {
						return
					}

					button.on('progress', function() {
						lastProgress = new Date().getTime()
					})

					var interval = window.setInterval(function() {
						if(new Date().getTime() > (2000 + lastProgress)) {
							scope.progressIncrement(0.05)
						}
					}, 500)

					button.on('progress-finish', function() {
						window.clearInterval(interval)
					})

					scope.progressIncrement(0.1)
				}

				scope.progressFinish = function() {
					scope.progressSet(1)
				}

				scope.progressIncrement = function(value) {
					value = value || 0.1

					emitEvent(element, 'progress', { value: value })
				}

				scope.progressSet = function(value) {
					var finish = false

					if(value >= 1) finish = true

					emitEvent(element, 'progress', { value: value, absolute: true, finish: finish })
				}

				scope.progressTimed = function(seconds, callback) {
					var button = element
					var bar = angular.element(button[0].querySelectorAll('.tz-bar'))

					if(button.hasClass('in-progress')) {
						return
					}

					bar.css('transition', seconds + 's linear')
					scope.progressSet(0.99)

					window.setTimeout(function() {
						bar.css('transition', '')
						scope.progressFinish()

						if(typeof callback === 'function') {
							callback()
						}
					}, seconds * 1000)
				}

				var progressInitialize = function() {
					var button = element
					var progress = 0

					button.addClass('progress-button')

					attrs.progressType = attrs.progressType || 'background-horizontal'
					attrs.loadingText = attrs.loadingText || 'Loading..'
					attrs.finishedText = attrs.finishedText || 'Done!'

					button.attr('data-progress-type', attrs.progressType)
					button.attr('data-loading-text', attrs.loadingText)
					button.attr('data-finished-text', attrs.finishedText)

					button.append(angular.element('<span class="tz-bar ' + attrs.progressType + '">'))
					var bar = angular.element(button[0].querySelectorAll('.tz-bar'))

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
