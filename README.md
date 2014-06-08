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

## API

### progressStart()

Simulates activity. Increments the progress every two seconds if there has been
no activity.

### progressFinish()

Finishes the progress.

### progressIncrement(value)

Increments the progress by `value` or `0.1` if no value was given.

*Note:* `value` ranges from 0 to 1 (0 % to 100 %).

### progressSet(value)

Sets progress to `value`.

*Note:* `value` ranges from 0 to 1 (0 % to 100 %).

### progressTimed(seconds, callback)

Finishes the progress after `seconds` and optionally calls `callback`.

## Original License

The original code is from Tutorialzine’s “[Buttons With Built-in Progress Meters](http://tutorialzine.com/2013/10/buttons-built-in-progress-meters/)”
tutorial. [Their license](http://tutorialzine.com/license/) reads as follows:

---

> The source code and techniques, covered in our tutorials, are free for use in your personal and commercial projects. The text and images of our articles, however, are copyrighted and may not be used or copied without written permission (this includes translation of the articles in different languages).

> You can use, modify and build upon our code for your (or your clients’) personal and commercial projects with no attribution necessary.

> You are not allowed to redistribute our demo files directly (you are encouraged to share a link to the tutorials instead).

> If you plan to include our source code in site templates or to package it with other forms of digital content, meant for direct selling on online marketplaces (such as ThemeForest, ActiveDen etc.), you are required to include a back-link to the article in question on Tutorialzine.com.

---
