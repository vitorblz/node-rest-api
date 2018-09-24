var app = require('./config/custom-express.js')();
//var steps = require('./controllers/steps.js')(app);

const serverPort = 3001;

app.listen(serverPort, function(){
  console.log(`Servidor rodando na porta ${serverPort}`);
});

