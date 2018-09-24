var winston  = require('winston');
var fs = require('fs');

if(!fs.existsSync('logs')){
    fs.mkdirSync('logs');
}

module.exports = winston.createLogger({
    transports: [
        new winston.transports.File({
            level: "info",
            filename: "logs/info.log",
            maxsize: 100000,
            maxFiles: 10
        })
    ]
});

