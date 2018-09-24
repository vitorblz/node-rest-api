var fs = require('fs');

module.exports = function(app){
    app.post('/upload/file',function(req, res){
        var filename = req.headers.filename;
        console.log(`Writing file: ${filename}`);
        req.pipe(fs.createWriteStream(filename)).
        on('finish', function(){
            console.log('File writed');
            res.status('201').send('ok');
        });
    });
}