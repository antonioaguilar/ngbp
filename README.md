# ngbp - AngularJS Project Template [![Build Status](https://travis-ci.org/antonioaguilar/ngbp.svg?branch=master)](https://travis-ci.org/antonioaguilar/ngbp)

## Installation

Install the CLI tools:

* ```npm install -g grunt-cli bower karma protractor```

To install the project template, run the following commands:

* Install NPM modules: ```npm install```
* Install Bower components: ```bower install```


## Usage

### Development Mode

* For rapid development and prototyping: ```grunt watch```. This creates a folder `_build`.
* then, open your browser on `http://localhost:9000/`

### Production Mode
* To compile the project for production: ```grunt production```.
* This creates a folder `_production` with all the javascript, html and CSS minified.
* Karma unit tests are run.


#### Acknowledgements
This project template is adapted from [ngbp](http://joshdmiller.github.com/ng-boilerplate) and extended by [Antonio Aguilar](http://www.antonio-aguilar.com), 2015.
