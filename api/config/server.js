const express = require('express'),
	bodyParser = require('body-parser');

const app = express();
  
// config body-parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// carregamento das rotas
require('../routes/statusAPI')(app);
require('../routes/automovel')(app);
require('../routes/motorista')(app);
require('../routes/utilizacao')(app);



/* exportar o objeto app */
module.exports = app;