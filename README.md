mvp - MVP Healthformics Analytics Platform
==========================================

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

## Run the Express npm Server

Run Chrome Browser with CORS disabled:
```
$ open /Applications/Google\ Chrome.app --args --disable-web-security
```

Start the Express Server
```
$ npm start
```

Copyright (c) [Healthformics Ltd](http://www.healthformics.com), 2014.
