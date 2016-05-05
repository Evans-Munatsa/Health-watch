//module dependencies
var express = require('express'),
    exphbs = require('express-handlebars'),
    home = require('./routes/home');


var app = express();


//setup template handlebars as the template engine
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

//setup handlers
app.get('/', home.home);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
