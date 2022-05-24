/* importar as configurações do servidor */
const app = require('../api/config/server');
const port = 3000;



/* parametrizar a porta de escuta */
app.listen(port, function(){
	console.log('Servidor sendo escutado na porta ' + port);
	
});