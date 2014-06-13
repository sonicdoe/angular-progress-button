describe('progress-button directive', function() {
	var element, scope, barElement, buttonTextElement

	beforeEach(function() {
		module('progressButton')

		inject(function($rootScope, $compile) {
			scope = $rootScope.$new()
		})
	})

	function compileDirective(template) {
		element = angular.element(template)

		inject(function($rootScope, $compile) {
			$compile(element)(scope)
			$rootScope.$digest()

			barElement = angular.element(element[0].querySelectorAll('.progress-button-bar'))
			buttonTextElement = angular.element(element[0].querySelectorAll('.progress-button-text'))
		})
	}

	it('shows the button’s inner text if progress = 0', function() {
		compileDirective('<progress-button value="progress">Button</progress-button>')

		scope.progress = 0

		expect(element.text()).toBe('Button')
	})

	it('shows the default in-progress text if progress = 0.5', function() {
		compileDirective('<progress-button value="progress">Button</progress-button>')

		scope.progress = 0.5

		expect(element.text()).toBe('Loading…')
	})

	it('shows the default completion text if progress = 1.0', function() {
		compileDirective('<progress-button value="progress">Button</progress-button>')

		scope.progress = 1.0

		expect(element.text()).toBe('Complete.')
	})

	it('shows the specified in-progress text if applicable', function() {
		compileDirective('<progress-button value="progress" in-progress="Text">Button</progress-button>')

		scope.progress = 0.5

		expect(element.text()).toBe('Text')
	})

	it('shows the specified completion text if applicable', function() {
		compileDirective('<progress-button value="progress" completion="Text">Button</progress-button>')

		scope.progress = 1.0

		expect(element.text()).toBe('Text')
	})
})
