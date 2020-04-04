var app = require('express')();
var bodyParser = require('body-parser');
var compression = require("compression");  
var morgan = require('morgan');

var server = app.listen(process.env.SERVER_PORT, function () {
  console.log('hotels app listening!');
});

app.use(morgan('dev'));
app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//handling /api route
app.use('/api', require('./routes'));