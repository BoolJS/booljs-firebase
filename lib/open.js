'use strict';

var Firebase = require('firebase');

module.exports = function (configuration) {
    var dbConfiguration = configuration[process.env.NODE_ENV || 'development']
    ,   connection      = new Firebase(dbConfiguration.url);

    return q.resolve(connection);
};
