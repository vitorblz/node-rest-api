var express = require('express');
var consign = require('consign');
var bodyParcer = require('body-parser');
var expressValidator = require('express-validator');
var morgan = require('morgan');
var logger = require('../services/logger.js');

module.exports = function(){
    var app = express();

    app.use(bodyParcer.urlencoded({extended :true}));
    app.use(bodyParcer.json());
    app.use(expressValidator());
    app.use(morgan('common',{
        stream: {
            write: function(message){
                logger.info(message);
            }
        }
    }));

    consign()
    .include('controllers')
    .include('persistence')
    .include('services')
    .into(app)

    return app;
}