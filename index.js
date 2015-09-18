'use strict';

var API = require('booljs-api');

module.exports = new API.DatabaseLoader(
    'booljs-firebase', // Name
    require('./lib') // Functions
);
