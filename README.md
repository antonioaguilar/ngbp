ngbp - AngularJS Project Boilerplate
====================================

Custom AngularJS project boilerplate based on the original [ngpb template](https://github.com/ngbp/ngbp) by [Josh D. Miller](https://github.com/joshdmiller). I have extended the template to include more features such as CSS sprites, S3 download/upload, Auto Reload, etc. 

####Note: This template is work in progress, use it at your own risk!

##Quick Start
```
$ git clone https://github.com/antonioaguilar/ngbp.git
$ cd ngbp
$ bower install
$ npm install
```

## Usage:
#### In Development
For rapid development and prototyping:
```
$ grunt watch
```
To make a full project build: 
```
$ grunt
```
This will create a folder `./build`. Note: This does not run the karma unit tests by default.  

#### In Production
To compile the project for production:
```
$ grunt production
```
This will create a folder `./production`. This includes javascript, html and CSS minification and runs the Karma unit tests. 


##Features
* **AngularJS common plugins** : Customised for AngularJS including UI-Route, Cookies, UI-Bootstrap, etc. 
* **Grunt build system** : Custom Gruntfile for use in development (grunt watch) and production builds with included integrated Karma unit testing.
* **html2js** : Compile html partial templates into angularjs javascript templates (e.g. $templateCache), reduces server requests.
* **CSS Sprites** : Generate CSS sprites from *.png files. 
* **Auto Reload** : Embedded express server to enable auto reload functionality when using `grunt watch`.   
* **Minification** : Includes *ngmin* and *uglify* for minification of html, javascript and CSS sources. 
* **JSHint enabled** : Includes a `.jshint` file that automatically enforces best coding practices in automated builds. 
* **Amazon S3** : Allows to copy, download and upload source and assets files to S3. 
 

Copyright (c) [Antonio Aguilar](http://www.antonio-aguilar.com), 2014.

