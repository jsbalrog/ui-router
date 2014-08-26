var express = require('express');
var path = require('path');

var app = express();

//app.set('views', __dirname + '/views');
//app.engine('html', require('ejs').renderFile);
//app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'app/public')));

require('./routes')(app);

app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});
