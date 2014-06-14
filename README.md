# angular-progress-button

Brings [buttons with built-in progress meters](http://tutorialzine.com/2013/10/buttons-built-in-progress-meters/)
to AngularJS. [Take a look at the example page](http://sonichedgehog.github.io/angular-progress-button/example).

## Usage

Include `progress-button.js` and `progress-button.css` from `src`.

### HTML

```html
<!-- Simple button -->
<progress-button value="progress">Button</a>

<!-- Horizontal type -->
<progress-button value="progress" type="horizontal">Button</a>

<!-- Custom in-progress and completion text -->
<progress-button value="progress" in-progress="Generating…" complete="Download">Generate</a>
```

### Attributes

#### value (*Number*)

Progress value, must range from `0` (default) to `1.0`.

#### type (*String*)

Style of progress animation, `horizontal` (default), `vertical` or `bottom-bar`.

#### in-progress (*String*)

Text which is shown when `value` is between `0` and `1.0`, defaults to `Loading…`.

#### complete (*String*)

Text which is shown when `value` is `1.0`, defaults to `Complete.`

### JavaScript

```js
angular.module('progressButtonDemo', ['progressButton'])
  .controller('ProgressButtonsCtrl', function($scope) {
    $scope.progress = 0.5;
  })
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
