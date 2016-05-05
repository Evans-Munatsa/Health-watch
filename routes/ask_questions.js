exports.ask_questions = function (req, res) {
res.render('ask_questions');
}

exports.add_questions = function ( req, res, next) {
  // body...
//  var title = req.body.title;
  //var question = req.body.question;
  req.getConnection(function(err, connection) {
      if (err) return next(err);
      var input = JSON.parse(JSON.stringfy(req.body));
      var data ={
        title: input.title,
        question :input.question
      };
      connection.query('insert into question set ?', data, function(err, results){
        if (err) return next(err)
        res.redirect('/')
      })
  })

};
