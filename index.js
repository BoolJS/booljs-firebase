'use strict';

var API = require('bool.js/api');

module.exports = new API.DatabaseLoader(
    'booljs-firebase', // Name
    require('./lib') // Functions
);
