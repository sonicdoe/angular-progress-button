describe('progress-button directive', function() {
	var element, scope

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
		})
	}
})
