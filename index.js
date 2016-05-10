'use strict';

const API = require('booljs-api')
,     lib = require('./lib');

module.exports = class BoolJSFirebase extends API.DatabaseLoader {
    constructor(){
        super('booljs-firebase');
    }

    openDatabase(configuration){
        return lib.openDatabase(configuration);
    }

    fetchModels(_instance, models, connection){
        return lib.fetchModels(_instance, models, connection);
    }
};
