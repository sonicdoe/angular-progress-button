# angular-progress-button

Brings [buttons with built-in progress meters](http://tutorialzine.com/2013/10/buttons-built-in-progress-meters/)
to AngularJS.

*Work in progress.*

See a demo at [sonichedgehog.github.io/angular-progress-button](http://sonichedgehog.github.io/angular-progress-button).

## Usage

Include `progress-button.js` and `progress-button.css`.

### HTML

```html
<!-- Simple button -->
<a progress-button ng-click="progressTimed(2)">Action!</a>

<!-- Different progress type -->
<a progress-button ng-click="submit(this)" progress-type="background-bar">Submit</a>

<!-- Custom loading and finished text -->
<a progress-button ng-click="progressTimed(3)" loading-text="Working.." finished-text="Finished!">Go!</a>

<!-- Assign button to a scope variable to call progressTimed() in the controller -->
<a progress-button="controlButton">Submit</a>
```

### JavaScript

```js
angular.module('progressButtonDemo', ['progressButton'])
	.controller('ProgressButtonsCtrl', function($scope) {
		$scope.submit = function(button) {
			button.progressTimed(1, function() {
				console.log('Callback fired.')
			}
		}
	})
	.controller('ProgressControlCtrl', function($scope, $timeout) {
		$scope.controlButton = {}

		// $timeout is necessary to wait for the directive’s link method to evaluate.
		// Otherwise $scope.controlButton will (still) be an empty object.
		$timeout(function() {
			$scope.controlButton.progressTimed(3)
		})
	}
```

## License

`angular-progress-button` is licensed under the BSD 2-clause license. See [LICENSE](./LICENSE) for the full license.

---

The original design and implementation is from Tutorialzine’s “[Buttons With Built-in Progress Meters](http://tutorialzine.com/2013/10/buttons-built-in-progress-meters/)” tutorial. [Their license](http://tutorialzine.com/license/) reads as follows:

> The source code and techniques, covered in our tutorials, are free for use in your personal and commercial projects. The text and images of our articles, however, are copyrighted and may not be used or copied without written permission (this includes translation of the articles in different languages).

> You can use, modify and build upon our code for your (or your clients’) personal and commercial projects with no attribution necessary.

> You are not allowed to redistribute our demo files directly (you are encouraged to share a link to the tutorials instead).

> If you plan to include our source code in site templates or to package it with other forms of digital content, meant for direct selling on online marketplaces (such as ThemeForest, ActiveDen etc.), you are required to include a back-link to the article in question on Tutorialzine.com.

---

`angular-progress-button` was originally written for a [bounty on Bountify](https://bountify.co/turn-this-jquery-into-a-angular-directive). The bounty poster has agreed to put the code under an open-source license.
