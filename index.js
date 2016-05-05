//module dependencies
var express = require('express'),
    exphbs = require('express-handlebars'),
    home = require('./routes/home'),
    questions = require('./routes/questions'),
    ask_questions = require('./routes/ask_questions'),
    answers = require('./routes/answers');



var app = express();


//setup template handlebars as the template engine
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

//setup handlers
app.get('/', home.home);
app.get('/help', home.help);
app.get('/questions', questions.questions);
app.get('/ask_questions', ask_questions.ask_questions);
app.get('/answers', answers.answers);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
