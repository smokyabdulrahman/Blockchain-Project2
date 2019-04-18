const app = require('express')();
const bodyparser = require('body-parser');

// BodyParser Middlewares
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Register Blockchain 
// Set port
app.set('port', 8080);

// Launch Server
app.listen(app.get('port'), () => console.log("Server launched at port 8080!"));