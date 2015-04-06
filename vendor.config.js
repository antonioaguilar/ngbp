module.exports = {

  /*
   * List all the vendor library files for compilation
   * NOTE: Use the *.min.js version when compiling for production. Otherwise,
   * use the normal *.js version for development
   */

  js: [
    // Angular Scripts
    'vendor/angular/angular.min.js',
    'vendor/angular-ui-router/release/angular-ui-router.min.js',
    'vendor/angular-cookies/angular-cookies.min.js',
    'vendor/angular-mocks/angular-mocks.js',
    'vendor/angular-resource/angular-resource.min.js',

    'vendor/Faker/build/build/faker.min.js',

    'vendor/underscore/underscore-min.js'
  ],
  css: [],
  assets: []
};
