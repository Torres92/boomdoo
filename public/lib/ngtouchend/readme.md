[![nglar - ngTouchend](http://static-content.webman.io/github.com/nglar/ngTouchend.png)](https://www.webman.io/nglar/ngTouchend)

A angular module to add directives for touch devices.

[![Build Status](https://travis-ci.org/nglar/ngTouchend.svg?branch=master)](https://travis-ci.org/nglar/ngTouchend)
[![StyleCI Status](https://styleci.io/repos/30239459/shield?style=flat)](https://styleci.io/repos/30239459)
[![Total Downloads](https://img.shields.io/github/downloads/nglar/ngTouchend/latest/total.svg)](https://github.com/nglar/ngTouchend)
[![Dependencies](https://img.shields.io/david/nglar/ngTouchend.svg)](https://github.com/nglar/ngTouchend)
[![Dev Dependencies](https://img.shields.io/david/dev/nglar/ngTouchend.svg)](https://github.com/nglar/ngTouchend)
[![License](https://img.shields.io/bower/l/ngtouchend.svg)](https://github.com/nglar/ngTouchend)
[![Issues](https://img.shields.io/github/issues/nglar/ngTouchend.svg)](https://github.com/nglar/ngTouchend/issues)
[![Forks](https://img.shields.io/github/forks/nglar/ngTouchend.svg)](https://github.com/nglar/ngTouchend/network)
[![GitHub stars](https://img.shields.io/github/stars/nglar/ngTouchend.svg)](https://github.com/nglar/ngTouchend/stargazers)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/nglar/ngTouchend.svg?style=social?style=flat)](https://twitter.com/intent/tweet?text=Check+out+this+awesome+Angular+module!+Adds+directives+for+touch+events+for+touch+devices.+%23angularjs+%23jsdev+https%3A%2F%2Fgithub.com%2Fnglar%2FngTouchend)
[![Gratipay donate button](https://img.shields.io/gratipay/marktopper.svg)](https://www.gratipay.com/marktopper/ "Donate weekly to this project using Gratipay")
[![Flattr donate button](https://img.shields.io/badge/flattr-donate-yellow.svg)](http://flattr.com/profile/marktopper "Donate monthly to this project using Flattr")
[![PayPayl donate button](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=LGMRSYNWLWBAU "Donate once-off to this project using Paypal")
[![BitCoin donate button](https://img.shields.io/badge/bitcoin-donate-yellow.svg)](https://www.coinbase.com/checkouts/c5a01e3bb552fbfa301b696371d8df48 "Donate once-off to this project using BitCoin")
[![Wishlist browse button](https://img.shields.io/badge/wishlist-donate-yellow.svg)](http://amzn.com/w/3CVLUT2YS911W "Buy an item on our wishlist for us")

* [Info](#info)
* [Installing/Loading](#installingloading)
* [Usage](#usage)
* [Links](#links)
* [Tests](#tests)
* [Official Documentation](#official-documentation)
* [Contributing](#contributing)
* [Security Vulnerabilities](#security-vulnerabilities)
* [License](#license)

## Info

Version: 1.0.1    
Author: Mark Topper [[Facebook](https://facebook.com/marktopper)] [[Github](https://github.com/marktopper)] [[Twitter](https://twitter.com/webman.io)]    
Website: [www.webman.io](https://www.webman.io)    
Email: [mark@webman.io](mailto:mark@webman.io)

## Installing/Loading

Install using bower:
```
bower install ngtouchend --save
```

Load the file to you HTML header:
```
<script type="text/javascript" src="path/to/bower_components/ngtouchend/build/ngTouchend.min.js"></script>
```

## Usage

You must include the ngTouchend dependency on your angular module:
````
var app = angular.module("demoapp", ["ngTouchend"]);
````

Then in your controller:

```
$scope.onTouchmove = function($event) {
   console.log('touchmove event called');
}
```

Then in your HTML:
```
<div ng-touchmove="onTouchmove($event)"></div>
```

This will trigger whenever a touch device is touched and moving.

[__Get the whole ngTouch package.__](https://github.com/nglar/ngTouch)

## Links

The following is a list of libraries that extend ngTouchend:

 * None yet

*Contact me at [mark@webman.io](mailto:mark@webman.io) to get yours added.*

The following is a list of libraries that requires by ngTouchend:

 * [Angular](https://github.com/angular/angular.js):
HTML enhanced for web apps

The following is a list of alternatives for ngTouchend:
* [ngTouch](https://github.com/nglar/ngTouch):
A angular module to add directives for touch devices.

## Tests

From the project directory, tests can be ran using `gulp test`

## Official Documentation

Documentation for this library can be found on the [website](https://www.webman.io/nglar/ngtouchend).

## Contributing

Thank you for considering contributing! The contribution guide can be found in the [contributions.md](https://github.com/nglar/ngTouchend/blob/master/contributions.md).

## Security Vulnerabilities

If you discover a security vulnerability within ngTouch, please send an e-mail to Mark Topper at [mark@webman.io](mailto:mark@webman.io). All security vulnerabilities will be promptly addressed.

## License

Released under the MIT License - see [`license.txt`](https://github.com/nglar/ngTouchend/blob/master/license) for details.
