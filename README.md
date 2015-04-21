# angular-progress-button

[![Build Status](http://img.shields.io/travis/SonicHedgehog/angular-progress-button/develop.svg)](https://travis-ci.org/SonicHedgehog/angular-progress-button)

Brings [buttons with built-in progress meters](http://tutorialzine.com/2013/10/buttons-built-in-progress-meters/)
to AngularJS. [Take a look at the example page](http://sonichedgehog.github.io/angular-progress-button/example).

## Usage

### Installing

Download `progress-button.min.js` and `progress-button.min.css` from the `dist` directory or install using [Bower](http://bower.io):

```shell
$ bower install angular-progress-button
```

Then include both files.

### HTML
 
#### As an element

```html
<!-- Simple button -->
<progress-button value="progress">Button</a>

<!-- Custom in-progress and completion text -->
<progress-button value="progress" in-progress="Generating…" complete="Download">Generate</a>
```
 
#### As an attribute

```html
<!-- Simple button -->
<button progress-button value="progress">Button</button>

<!-- Horizontal type -->
<button progress-button value="progress" type="horizontal">Button</button>

<!-- <a> tag with custom in-progress and completion text -->
<a progress-button value="progress" in-progress="Generating…" complete="Download">Generate</a>
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

## Running tests

Install all dependencies using:

```shell
$ npm install
```

Run the [Karma test runner](http://karma-runner.github.io):

```shell
$ ./node_modules/karma/bin/karma start
```

You can also execute a single run in PhantomJS using `grunt test`.

## Release History

- v0.3.0 (2015-04-21): Allow directive to be used [as an attribute](#as-an-attribute)
- v0.2.0 (2015-01-20):
    - Remove custom color themes
    - Drop `-moz-` prefix for CSS transitions and CSS gradients
    - Dynamically resize buttons to fit text in any state
- v0.1.1 (2014-08-03): Add minified version (see `dist/`)
- v0.1.0 (2014-06-14): Initial release

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
